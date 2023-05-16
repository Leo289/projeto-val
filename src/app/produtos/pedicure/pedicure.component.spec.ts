import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedicureComponent } from './pedicure.component';

describe('PedicureComponent', () => {
  let component: PedicureComponent;
  let fixture: ComponentFixture<PedicureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedicureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedicureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
