import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(private authService: AuthService,
              private router: Router) { }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    console.log('AuthGuard está sendo executado');

    const isLoggedIn = await this.authService.isLoggedIn();
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
  }


