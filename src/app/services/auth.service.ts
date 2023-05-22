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
    afAuth.authState.subscribe(user => {
      this.isLoggedIn = !!user;
      console.log('isLoggedIn:', this.isLoggedIn);
    });
  }

  async GoogleAuth() {
    console.log('Método GoogleAuth chamado');
    const user = await this.afAuth.currentUser;

    if (!user) {
      try {
        const provider = new firebase.auth.GoogleAuthProvider();
        console.log('Antes da chamada signInWithPopup');
        const credential = await this.afAuth.signInWithPopup(provider);
        console.log('Depois da chamada signInWithPopup', credential);

        this.isLoggedIn = true;
        console.log('isLoggedIn definido como', this.isLoggedIn);

        await this.afAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

        this.setAuthToken(credential.user?.uid || '');
        console.log('Valor do authToken após o setAuthToken: ', this.cookieService.get(AUTH_TOKEN_KEY));

        console.log('URL da imagem do perfil do usuário:', credential.user?.photoURL);

        const userData = {
          displayName: credential.user?.displayName,
          email: credential.user?.email,
          photoURL: credential.user?.photoURL,
          uid: credential.user?.uid,
          lastLogin: firebase.firestore.FieldValue.serverTimestamp()
        };

        await this.userService.createUser(userData);
        console.log(userData);

      } catch (error) {
        console.error('Erro na chamada signInWithPopup', error);
      }
    }
    this.router.navigate(['/agendamento']);
  }

  async logout() {
    await this.afAuth.signOut();
    this.isLoggedIn = false;
    console.log('isLoggedIn definido como', this.isLoggedIn);

    this.cookieService.delete(AUTH_TOKEN_KEY);
    alert('Você saiu da sua conta.');
    console.log('isLoggedIn:', this.isLoggedIn);

    this.router.navigate(['/']);
  }

  isUserLoggedIn(): boolean {
    const authToken = this.cookieService.get(AUTH_TOKEN_KEY);
    console.log('Valor do authToken recuperado: ', authToken);
    const isLoggedIn = !!authToken;
    console.log('isUserLoggedIn:', isLoggedIn);
    return isLoggedIn;
  }

  private setAuthToken(authToken: string): void {
    console.log('Método setAuthToken chamado, authToken:', authToken);
    const expirationDate = new Date();
    const expiresIn = 86400; // tempo de expiração em segundos (1 dia)
    expirationDate.setSeconds(expirationDate.getSeconds() + expiresIn);
    this.cookieService.set(AUTH_TOKEN_KEY, authToken, expirationDate);
  }
}
