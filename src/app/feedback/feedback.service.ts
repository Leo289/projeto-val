// feedback.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SatisfactionSurvey } from './satisfaction-survey/satisfaction-survey.interface';
import { Firestore, collectionData, doc, setDoc, collection } from '@angular/fire/firestore';

@Injectable()
export class FeedbackService {
  private display = new BehaviorSubject<boolean>(false);
  display$ = this.display.asObservable();

  constructor(private firestore: Firestore) { }

  async addFeedback(survey: SatisfactionSurvey) {
    const surveyCollection = collection(this.firestore, 'satisfacao');
    const surveyDoc = doc(surveyCollection);
    await setDoc(surveyDoc, survey);
  }

  toggleDisplay() {
    this.display.next(!this.display.getValue());
  }
}
