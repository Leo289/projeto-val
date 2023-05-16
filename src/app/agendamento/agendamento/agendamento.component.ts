//agendamento.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {


  constructor(public authService: AuthService) { }

  ngOnInit() {

  }

  logout(): void {
    this.authService.logout();
  }
}
