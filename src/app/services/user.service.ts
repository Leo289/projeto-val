// user.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }

  async createUser(userData: any): Promise<any> {
    try {
      const email = userData.email;
      delete userData.email;
      const docRef = await this.firestore.collection('users').doc(email).set(userData);
      return { email: email, ...userData };
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      return null;
    }
  }

}
