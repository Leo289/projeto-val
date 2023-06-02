import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaDosPesComponent } from './spa-dos-pes.component';

describe('SpaDosPesComponent', () => {
  let component: SpaDosPesComponent;
  let fixture: ComponentFixture<SpaDosPesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpaDosPesComponent]
    });
    fixture = TestBed.createComponent(SpaDosPesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
