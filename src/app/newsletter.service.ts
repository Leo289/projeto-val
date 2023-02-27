import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Newsletter } from './newsletter.interface';



@Injectable({  providedIn: 'root' })
export class NewsletterService {

  constructor(private firestore: Firestore) { }


 addNewsletter(newsletter: Newsletter) {
  const newsletterRef = collection(this.firestore, 'newsletter')
    return addDoc(newsletterRef, newsletter);


    console.log();
      }
    }
