import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkFeedbackComponent } from './link-feedback.component';

describe('LinkFeedbackComponent', () => {
  let component: LinkFeedbackComponent;
  let fixture: ComponentFixture<LinkFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkFeedbackComponent]
    });
    fixture = TestBed.createComponent(LinkFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
