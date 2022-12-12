import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import Email from '../email';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private firestore: Firestore) { }

  addEmail(email: Email){
    const emailRef = collection(this.firestore, 'email');
    return addDoc(emailRef, email);
  }
}
