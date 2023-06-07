// satisfaction-survey.component.ts
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { SatisfactionSurvey } from './satisfaction-survey.interface';
import { FeedbackService } from '../feedback.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-satisfaction-survey',
  templateUrl: './satisfaction-survey.component.html',
  styleUrls: ['./satisfaction-survey.component.css']
})
export class SatisfactionSurveyComponent implements OnInit, OnDestroy {
  @ViewChild('endForm') private endForm: ElementRef | undefined;
  survey: SatisfactionSurvey = {
    ratingEstablishment: '',
    ratingService: '',
    ratingSupport: '',
    comments: '',
    nome: '',
    email: ''
  };

  displaySurvey: boolean | undefined;
  private subscription: Subscription | undefined;

  ratings: string[] = ['Ruim', 'Regular', 'Bom', 'Ótimo'];
  showInvalidEmailAlert: boolean = false;
  showEmailSentAlert: boolean = false;

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.subscription = this.feedbackService.display$.subscribe(display => {
      this.displaySurvey = display;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  submit() {
    if (this.survey.email && !this.validateEmail(this.survey.email)) {
      this.showInvalidEmailAlert = true;
    } else {
      this.showInvalidEmailAlert = false;
    }
    this.feedbackService.addFeedback(this.survey);
    this.showEmailSentAlert = true;
    this.survey = {
      ratingEstablishment: '',
      ratingService: '',
      ratingSupport: '',
      comments: '',
      nome: '',
      email: ''
    };
    setTimeout(() => {
      this.endForm?.nativeElement.scrollIntoView({ behavior: 'smooth' });
    });
  }

  validateEmail(email: string): boolean {
    const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}
