// services.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { NewsletterService } from './newsletter.service';
import { LoggedInService } from './logged-in.service';
import { NossosservicosService } from './nossosservicos.service';
import { CookieService } from 'ngx-cookie-service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],

  providers: [
    AuthService,
    NewsletterService,
    NossosservicosService,
    LoggedInService,
    CookieService
  ]
})
export class ServicesModule { }
