//newsletter.service.ts
import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore, getDocs, query, where } from '@angular/fire/firestore';
import { Newsletter } from '../newsletter';

@Injectable({ providedIn: 'root' })
export class NewsletterService {

  constructor(private firestore: Firestore) { }

  async addNewsletter(newsletter: Newsletter): Promise<string> {
    console.log('Iniciando addNewsletter'); // Log adicionado
    // Verifica se o email já existe na coleção
    const newsletterRef = collection(this.firestore, 'newsletter');
    const emailExistsQuery = query(newsletterRef, where('email', '==', newsletter.email));
    const emailExistsDocs = await getDocs(emailExistsQuery);

    if (emailExistsDocs.size > 0) {
      // Email já existe na coleção
      console.log('Email já cadastrado'); // Log adicionado
      return Promise.reject('Email já cadastrado.');
    } else {
      // Adiciona o documento na coleção
      const newsletterDoc = await addDoc(newsletterRef, newsletter);
      console.log(`Documento adicionado com sucesso: ${newsletterDoc.id}`); // Log adicionado
      return Promise.resolve(newsletterDoc.id);
    }
    console.log('Finalizando addNewsletter'); // Log adicionado
  }
}

