import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Newsletter } from 'src/app/newsletter.interface';
import { NewsletterService } from 'src/app/newsletter.service';

@Component({
  selector: 'app-fomulario',
  templateUrl: './fomulario.component.html',
  styleUrls: ['./fomulario.component.css']
})
export class FomularioComponent implements OnInit {
  newsletter: Newsletter = { email: '' };
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private newsletterService: NewsletterService) { }

  ngOnInit(): void { }

  async onSubmit(newsletterForm: NgForm) {
    try {
      const docId = await this.newsletterService.addNewsletter(this.newsletter);
      console.log(`Documento adicionado com sucesso: ${docId}`);
      this.successMessage = 'Email cadastrado com sucesso!';
      setTimeout(() => {
        this.successMessage = '';
      }, 10000);
    } catch (error) {
      console.error(error);
      // Exibe uma mensagem de erro na tela
      this.errorMessage = 'O email já está cadastrado.';
      setTimeout(() => {
        this.errorMessage = '';
      }, 10000);
    }
    this.newsletter.email = '';
  }
}








