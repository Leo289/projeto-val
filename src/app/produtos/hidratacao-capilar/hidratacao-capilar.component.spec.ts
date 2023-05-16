import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HidratacaoCapilarComponent } from './hidratacao-capilar.component';

describe('HidratacaoCapilarComponent', () => {
  let component: HidratacaoCapilarComponent;
  let fixture: ComponentFixture<HidratacaoCapilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HidratacaoCapilarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HidratacaoCapilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
