import { Component, OnInit } from '@angular/core';
import { Firestore, collection } from '@angular/fire/firestore';

import { EmailService } from '../services/email.service';


@Component({
  selector: 'app-consultafire',
  templateUrl: './consultafire.component.html',
  styleUrls: ['./consultafire.component.css']
})
export class ConsultafireComponent implements OnInit {
  // email: Email[] = [];



  constructor(private firestore: Firestore, private emailService: EmailService
    ) { }

  ngOnInit(): void {}

  //   // this.emailService.getEmail().subscribe(email => {
  //   //   this.email = email;

  //   })

  // //  const consulta = this.firestore.collection("email").orderBy("email", "asc");
  // //  console.log(consulta)
  // }

}
