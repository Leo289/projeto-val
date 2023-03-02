import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore, getDocs, query, where } from '@angular/fire/firestore';
import { Newsletter } from './newsletter.interface';



@Injectable({  providedIn: 'root' })
export class NewsletterService {

  constructor(private firestore: Firestore) { }


 async addNewsletter(newsletter: Newsletter): Promise<string> {
    // Verifica se o email já existe na coleção
    const newsletterRef = collection(this.firestore, 'newsletter');
    const emailExistsQuery = query(newsletterRef, where('email', '==', newsletter.email));
    const emailExistsDocs = await getDocs(emailExistsQuery);

    if (emailExistsDocs.size > 0) {
      // Email já existe na coleção
      
      return Promise.reject('Email já cadastrado.');
    } else {
      // Adiciona o documento na coleção
      const newsletterDoc = await addDoc(newsletterRef, newsletter);
      return Promise.resolve(newsletterDoc.id);
    }
  }
}
