import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoracaoComponent } from './coloracao.component';

describe('ColoracaoComponent', () => {
  let component: ColoracaoComponent;
  let fixture: ComponentFixture<ColoracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColoracaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColoracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
