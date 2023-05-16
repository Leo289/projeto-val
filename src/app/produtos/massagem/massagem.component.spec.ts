import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassagemComponent } from './massagem.component';

describe('MassagemComponent', () => {
  let component: MassagemComponent;
  let fixture: ComponentFixture<MassagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MassagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
