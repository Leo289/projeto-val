// link-servicos.component.ts
import { Component } from '@angular/core';
import servicosJson from 'src/assets/servicos.json';

@Component({
  selector: 'app-link-servicos',
  templateUrl: './link-servicos.component.html',
  styleUrls: ['./link-servicos.component.css']
})
export class LinkServicosComponent {
  servicos = servicosJson.servicos;


  constructor() { }

}
