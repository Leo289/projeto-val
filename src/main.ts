// main.ts
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/* import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; */

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

/*const firebaseApp = initializeApp(environment.firebase);
const db = getFirestore(firebaseApp); */
