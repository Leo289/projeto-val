import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpezaPeleComponent } from './limpeza-pele.component';

describe('LimpezaPeleComponent', () => {
  let component: LimpezaPeleComponent;
  let fixture: ComponentFixture<LimpezaPeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimpezaPeleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimpezaPeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
