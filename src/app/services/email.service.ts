import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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

  getEmail(): Observable<Email[]>{
    const emailRef = collection(this.firestore, 'email');
  return collectionData(emailRef, {idField: "id" }) as Observable<Email[]>;


}



}

