
import { EmailService } from './../../services/email.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { timer } from 'rxjs';




@Component({
  selector: 'app-fomulario',
  templateUrl: './fomulario.component.html',
  styleUrls: ['./fomulario.component.css']
})
export class FomularioComponent implements OnInit {

  formMessage = false;
  timer = 12;
  constructor(private emailService: EmailService) {




  }



  ngOnInit(){  }


  async onSubmit(f: NgForm){

    const resposta = await this.emailService.addEmail(f.value);
    f.form.reset();
    console.log(f)
    this.formMessage = true
    // console.log(resposta);
    return setTimeout(() => {
      this.formMessage = false;
    }, this.timer * 1000);


}





}
