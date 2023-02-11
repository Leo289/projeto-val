import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewsletterService  } from '../../services/newsletter.service.';
import { Newsletter } from '../../newsletter.interface';


@Component({
  selector: 'app-fomulario',
  templateUrl: './fomulario.component.html',
  styleUrls: ['./fomulario.component.css']
})
export class FomularioComponent implements OnInit {
  newsletter: Newsletter = {email: ''
  };

  constructor(private newsletterService: NewsletterService) { }

  ngOnInit(): void {
  }

  onSubmit(newsletter: NgForm) {
    this.newsletterService.registerEmail(this.newsletter)
      .then(() => {
        console.log('E-mail cadastrado com sucesso!');
        newsletter.reset();
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
}







