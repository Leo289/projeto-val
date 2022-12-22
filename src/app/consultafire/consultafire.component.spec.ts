import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultafireComponent } from './consultafire.component';

describe('ConsultafireComponent', () => {
  let component: ConsultafireComponent;
  let fixture: ComponentFixture<ConsultafireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultafireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultafireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
