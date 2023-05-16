// auth.service.ts
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { CookieService } from 'ngx-cookie-service';

const AUTH_TOKEN_KEY = 'authToken';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isLoggedIn: boolean = false;

  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public router: Router,
    private cookieService: CookieService,
    public userService: UserService
  ) {
    // Verifica se o usuário já está autenticado
    const authToken = localStorage.getItem(AUTH_TOKEN_KEY);
    if (authToken) {
      this.isLoggedIn = true;
    }

    // Atualizar isLoggedIn quando o estado de autenticação mudar
    afAuth.authState.subscribe(user => {
      this.isLoggedIn = !!user;
      console.log('isLoggedIn:', this.isLoggedIn);
    });
  }

  async GoogleAuth() {
    const user = await this.afAuth.currentUser;

    if (!user) {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.signInWithPopup(provider);

      await this.afAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      // Armazene o token de autenticação no cookie em vez de localStorage
      this.setAuthToken(credential.user?.uid || '');

      this.router.navigate(['/agendamento']);

      console.log('URL da imagem do perfil do usuário:', credential.user?.photoURL);

      try {
        const userData = {
          displayName: credential.user?.displayName,
          email: credential.user?.email,
          photoURL: credential.user?.photoURL,
          uid: credential.user?.uid,
          lastLogin: firebase.firestore.FieldValue.serverTimestamp()
        };

        await this.userService.createUser(userData);
        console.log(userData)

      } catch (error) {
        console.error('Erro ao criar usuário:', error);
      }

      localStorage.setItem(AUTH_TOKEN_KEY, credential.user?.uid || '');
      console.log('Token de autenticação salvo no localStorage:', localStorage.getItem(AUTH_TOKEN_KEY));
      this.router.navigate(['/agendamento']);
    } else {
      this.router.navigate(['/agendamento']);
    }
  }

  async logout() {
    await this.afAuth.signOut();
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem('user');
    this.afAuth.authState.subscribe(user => this.isLoggedIn = !!user);
    alert('Você saiu da sua conta.');
    console.log('isLoggedIn:', this.isLoggedIn);

    this.router.navigate(['/']);
  }

  isUserLoggedIn(): boolean {
    const authToken = this.cookieService.get(AUTH_TOKEN_KEY);
    const isLoggedIn = !!authToken;
    console.log('isUserLoggedIn:', isLoggedIn);
    return isLoggedIn;
  }

  private setAuthToken(authToken: string): void {
    const expirationDate = new Date();
    const expiresIn = 86400; // tempo de expiração em segundos (1 dia)
    expirationDate.setSeconds(expirationDate.getSeconds() + expiresIn);
    this.cookieService.set(AUTH_TOKEN_KEY, authToken, expirationDate);
  }
}













/* import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

const AUTH_TOKEN_KEY = 'authToken';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly AUTH_TOKEN_KEY = 'authToken';
  isLoggedIn: any;

  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public router: Router
  ) { } */

  // Sign in with Google
  /* async GoogleAuth() {
    const isLoggedIn = await this.isLoggedIn();

    if (isLoggedIn) {
      // usuário já está autenticado, redireciona para a página de agendamento
      this.router.navigate(['/agendamento']);
      return;
    }

    await this.afAuth.signOut();
    const provider = new firebase.auth.GoogleAuthProvider();
    console.log('Antes de fazer login com o Google');
    const result = await this.afAuth.signInWithPopup(provider);

    if (result && result.user) {
      // verifica se o e-mail do usuário já existe no Firestore
      const userEmail = result.user.email;
      if (userEmail) {
        const docRefUser = this.afs.collection('users').doc(userEmail);
        const docUser = await docRefUser.get().toPromise();

        // Verifica se o e-mail do usuário já existe na coleção newsletter
        const docRefNewsletter = this.afs.collection('newsletter').doc(userEmail);
        const docNewsletter = await docRefNewsletter.get().toPromise();

        if (docUser && docUser.exists) {
          const userDoc = docUser.data() as any; // Obtém os dados do documento
          console.log(userDoc); // Imprime os dados no console

          // atualiza o campo lastLogin no documento do usuário
          try {
            await docRefUser.update({ lastLogin: new Date() });
          } catch (error) {
            console.error(error);
          }

          // se o usuário já existe, não faz nada
          this.setAuthState(true); // marca o usuário como autenticado no sessionStorage
          this.router.navigate(['/agendamento']); // redireciona o usuário para a página de agendamento
          localStorage.setItem(AUTH_TOKEN_KEY, '1234'); // Armazena o token de autenticação
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
            lastLogin: new Date(), // adiciona o campo lastLogin ao novo usuário
          };
          try {
            await docRefUser.set(user);
            console.log("Documento criado com sucesso no Firestore:", user);
            localStorage.setItem('user', JSON.stringify(user));
            console.log("Usuário registrado com sucesso");
          } catch (error) {
            console.error(error);
          }

          if (docNewsletter && docNewsletter.exists) {
            // Se o email já existe na coleção newsletter, não precisa fazer nada
            // ...
          } else {
            try {
              await docRefNewsletter.set({ email: userEmail });
              console.log("Documento criado com sucesso na coleção newsletter:", userEmail);
            } catch (error) {
              console.error(error);
            }
          }

          localStorage.setItem(AUTH_TOKEN_KEY, '1234'); // Armazena o token de autenticação
        }
      }
    } else {
      // Exibe uma mensagem de erro ou faz outra ação necessária
      console.log('Erro ao autenticar usuário com o Google.');
    }
    console.log('Fim da função GoogleAuth');
  }

  getAuthState(): boolean {
    const isLoggedInString = localStorage.getItem(AUTH_TOKEN_KEY);
    return isLoggedInString === 'true';
  }

  setAuthState(isLoggedIn: boolean): void {
    localStorage.setItem(AUTH_TOKEN_KEY, isLoggedIn ? 'true' : 'false');
  }


  // faz logout */
  /* async logout() {
    await this.afAuth.signOut();
    localStorage.removeItem(AUTH_TOKEN_KEY); // Remove o token de autenticação
    localStorage.removeItem('user'); // remove a informação do usuário do localStorage
    localStorage.removeItem(this.AUTH_TOKEN_KEY);
    this.router.navigate(['/']); // redireciona o usuário para a rota
  } */


  // verifica se o usuário está autenticado
  /* async isLoggedIn(): Promise<boolean> {
    const currentUser = await this.afAuth.currentUser;
    if (currentUser !== null) {
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
  } */

