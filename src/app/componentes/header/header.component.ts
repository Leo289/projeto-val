// header.component.ts
import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // Setando os ícones
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faYoutube = faYoutube;

  constructor() { }

  ngOnInit(): void {


  }
}
