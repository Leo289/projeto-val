
import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import Email from '../../email';


@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.css']
})
export class CorpoComponent implements OnInit {

  emails!: Email[];

  constructor(private emailService: EmailService) {  }

  ngOnInit(): void {

      this.getEmail();

    }
    getEmail(){
      this.emailService.getEmail().subscribe(emails => {
      this.emails = emails;
      

});
  }
}
