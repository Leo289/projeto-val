import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly SESSION_STORAGE_KEY = 'auth.service';

  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public router: Router
  ) { }

  setAuthState(isLoggedIn: boolean): void {
    sessionStorage.setItem(this.SESSION_STORAGE_KEY, isLoggedIn ? 'true' : 'false');
  }

  getAuthState(): boolean {
    const isLoggedInString = sessionStorage.getItem(this.SESSION_STORAGE_KEY);
    return isLoggedInString === 'true';
  }


  // Sign in with Google
  async GoogleAuth() {
    await this.afAuth.signOut();
    const provider = new firebase.auth.GoogleAuthProvider();
    console.log('Antes de fazer login com o Google');
    const result = await this.afAuth.signInWithPopup(provider);
    if (result && result.user) {
      // verifica se o e-mail do usuário já existe no Firestore
      const userEmail = result.user.email;
      if (userEmail) {
        const docRef = this.afs.collection('users').doc(userEmail);
        const doc = await docRef.get().toPromise();
        if (doc && doc.exists) {
          const userDoc = doc.data() as any; // Obtém os dados do documento
          console.log(userDoc); // Imprime os dados no console
          // se o usuário já existe, não faz nada

        } else {
          const user = {
            displayName: result.user.displayName,
            email: result.user.email,
            photoURL: result.user.photoURL,
            uid: result.user.uid,
            roles: {
              admin: true,
              regular: true,
            }, // adicione outras informações que você deseja armazenar para o usuário
          };
          try {
            await docRef.set(user);
            console.log("Documento criado com sucesso no Firestore:", user);
            localStorage.setItem('user', JSON.stringify(user));
            console.log("Usuário registrado com sucesso");
          } catch (error) {
            console.error(error);
          }
        }
      }
      this.router.navigate(['/agendamento']); // redireciona o usuário para a rota
    } else {
      // Exibe uma mensagem de erro ou faz outra ação necessária
      console.log('Erro ao autenticar usuário com o Google.');
    }
    console.log('Fim da função GoogleAuth');
  }

  // faz logout
  async logout() {
    await this.afAuth.signOut();
    localStorage.removeItem('user'); // remove a informação do usuário do localStorage
    this.router.navigate(['/']); // redireciona o usuário para a rota
  }

  // verifica se o usuário está autenticado

  async isLoggedIn(): Promise<boolean> {
    const userStr = localStorage.getItem('user');
    const user = userStr ? JSON.parse(userStr) : null;
        if (user) {

            JSON.parse(localStorage.getItem('user') ?? '')
                  // Se o usuário já estiver salvo localmente, retorna verdadeiro
      return true;
    } else {
      // Se o usuário ainda não estiver salvo localmente, busca no Firestore
      const currentUser = await this.afAuth.currentUser;
      if (currentUser) {
        const userEmail = currentUser.email;
        if (userEmail) {
          const docRef = this.afs.collection('users').doc(userEmail);
          const doc = await docRef.get().toPromise();
          if (doc && doc.exists) {
            const userData = doc.data();
            localStorage.setItem('user', JSON.stringify(userData));
            return true;
          }
        }
      }
      return false;
    }
  }
}

