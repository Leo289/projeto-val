
import { EmailService } from './../../services/email.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-fomulario',
  templateUrl: './fomulario.component.html',
  styleUrls: ['./fomulario.component.css']
})
export class FomularioComponent implements OnInit {

  public formMessage!: string;
  public arigato = document.getElementById('msg');



  constructor(private emailService: EmailService) {


  }



  ngOnInit(){  }


  async onSubmit(f: NgForm){

    const resposta = await this.emailService.addEmail(f.value);
    f.form.reset();
    console.log(f)
    // console.log(resposta);
    return (this.formMessage = "Obrigado por se registrar");

setTimeout(() => {
         arigato.style.display = 'none';
      },3000);



}



   

}
