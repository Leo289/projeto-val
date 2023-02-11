
import { Newsletter } from './../newsletter.interface';
import { Injectable } from '@angular/core';
import { collection, query, where, getDocs, Firestore, addDoc } from "firebase/firestore";


@Injectable({  providedIn: 'root' })
export class NewsletterService {



  constructor(private firestore: Firestore) { }

 async registerEmail(newsletter: Newsletter) {


  const docRef = collection(this.firestore, "newsletter");
  const q = query(collection(this.firestore, "email"), where("email", "==", docRef));

  const emailSnapshot = await docRef.getDocs(q);
  if (emailSnapshot.exists) {
    return false;
  } else {
    addDoc(docRef, newsletter);
  }
}
}
  //const q = query(docRef, where(newsletter.email, "==" , newsletter.email));
  //const querySnapshot = await getDocs(docRef);





      // await addDoc(docRef, newsletter);
      // console.log("Document written with ID: ", docRef.id);

































//   constructor(private firestore: Firestore) { }

//   addEmail(email: Email){
//     const emailRef = collection(this.firestore, 'email');
//     return addDoc(emailRef, email);
//   }

//   getEmail(): Observable<Email[]>{
//     const emailRef = collection(this.firestore, 'email');
//   return collectionData(emailRef, {idField: "id" }) as Observable<Email[]>;


// }


