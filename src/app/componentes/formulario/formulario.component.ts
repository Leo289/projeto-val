// formulario.component.ts
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Newsletter } from 'src/app/newsletter';
import { NewsletterService } from 'src/app/services/newsletter.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  newsletter: Newsletter = { email: '' };
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private newsletterService: NewsletterService) { }

  ngOnInit(): void { }

  async onSubmit(newsletterForm: NgForm) {
    // Limpar mensagens existentes
    this.errorMessage = '';
    this.successMessage = '';

    try {
      const docId = await this.newsletterService.addNewsletter(this.newsletter);
      console.log(`Documento adicionado com sucesso: ${docId}`);
      this.successMessage = 'Email cadastrado com sucesso!';
      // Redefina newsletter.email somente se a operação for bem-sucedida
      this.newsletter.email = '';
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
  }
}
