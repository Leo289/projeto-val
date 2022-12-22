
import { Component, OnInit } from '@angular/core';
import email from 'src/app/Email';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.css']
})
export class CorpoComponent implements OnInit {

  emails!: email[];

  constructor(private emailService: EmailService) {  }

  ngOnInit(): void {

      this.getEmail();

    }
    getEmail(){
      this.emailService.getEmail().subscribe(emails => {
      this.emails = emails;
      console.log(emails)

});
  }
}
