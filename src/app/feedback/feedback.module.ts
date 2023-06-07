// feedback.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SatisfactionSurveyComponent } from './satisfaction-survey/satisfaction-survey.component';
import { FeedbackService } from './feedback.service';
import { LinkFeedbackComponent } from './link-feedback/link-feedback.component';

const feedbackRoutes: Routes = [
  { path: 'feedback', component: SatisfactionSurveyComponent }
];

@NgModule({
  declarations: [SatisfactionSurveyComponent, LinkFeedbackComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(feedbackRoutes)  // aqui é onde as rotas são adicionadas
  ],
  providers: [FeedbackService],
  exports: [SatisfactionSurveyComponent, LinkFeedbackComponent]
})
export class FeedbackModule { }
