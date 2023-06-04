// feedback.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SatisfactionSurveyComponent } from './satisfaction-survey/satisfaction-survey.component';
import { FeedbackService } from './feedback.service';
import { LinkFeedbackComponent } from './link-feedback/link-feedback.component';

@NgModule({
  declarations: [SatisfactionSurveyComponent, LinkFeedbackComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [FeedbackService],
  exports: [SatisfactionSurveyComponent]
})
export class FeedbackModule { }
