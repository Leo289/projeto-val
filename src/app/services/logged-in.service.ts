// logged-in.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})

export class LoggedInService {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  async doSomethingIfLoggedIn() {
    const user = await this.authService.afAuth.currentUser;
    if (user) {
      // Faça algo aqui se o usuário estiver logado
      console.log('Usuário está logado!');
    } else {
      // Redirecione o usuário para a página de login
      console.log('Usuário não está logado!');
      this.router.navigate(['/']);
    }
  }
}




