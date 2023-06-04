// satisfaction-survey.component.ts
import { Component } from '@angular/core';
import { SatisfactionSurvey } from './satisfaction-survey.interface';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-satisfaction-survey',
  templateUrl: './satisfaction-survey.component.html',
  styleUrls: ['./satisfaction-survey.component.css']
})
export class SatisfactionSurveyComponent {
  survey: SatisfactionSurvey = {
    ratingEstablishment: 0,
    ratingService: 0,
    ratingSupport: 0,
    comments: ''
  };

  constructor(private feedbackService: FeedbackService) { }

  submit() {
    this.feedbackService.addFeedback(this.survey);
    this.survey = {
      ratingEstablishment: 0,
      ratingService: 0,
      ratingSupport: 0,
      comments: ''
    };
  }
}
