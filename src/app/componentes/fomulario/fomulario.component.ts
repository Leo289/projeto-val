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

  constructor(private newsletterService: NewsletterService) { }

  ngOnInit(): void {}

  async onSubmit(_newsletterForm: NgForm) {
    this.newsletterService.addNewsletter(this.newsletter);
    this.newsletter.email = '';

    console.log();
  }
}

      /* .then(() => {
        console.log('E-mail cadastrado com sucesso!');
        newsletter.reset();
      })
      .catch((error: any) => {
        console.error(error);
      });
  } */








