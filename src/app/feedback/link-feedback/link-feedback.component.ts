// link-feedback.component.ts
import { Component } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-link-feedback',
  templateUrl: './link-feedback.component.html',
  styleUrls: ['./link-feedback.component.css']
})
export class LinkFeedbackComponent {
  constructor(private feedbackService: FeedbackService) { }

  toggleDisplay() {
    this.feedbackService.toggleDisplay();
  }
}
