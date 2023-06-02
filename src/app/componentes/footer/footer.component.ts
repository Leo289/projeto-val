// footer.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  images = [
    '/assets/2022-07-22_084337.png',
    '/assets/WhatsApp Image 2023-05-30 at 23.06.39 (1).jpeg',
    '/assets/WhatsApp Image 2023-05-30 at 23.06.39.jpeg',
    '/assets/WhatsApp Image 2023-05-30 at 23.12.15.jpeg'
    // Adicione mais caminhos de imagens conforme necessário
  ];
}
