import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquiagemComponent } from './maquiagem.component';

describe('MaquiagemComponent', () => {
  let component: MaquiagemComponent;
  let fixture: ComponentFixture<MaquiagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaquiagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaquiagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
