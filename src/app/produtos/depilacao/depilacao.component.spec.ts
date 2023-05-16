import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepilacaoComponent } from './depilacao.component';

describe('DepilacaoComponent', () => {
  let component: DepilacaoComponent;
  let fixture: ComponentFixture<DepilacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepilacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepilacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
