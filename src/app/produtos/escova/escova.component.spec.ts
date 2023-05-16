import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscovaComponent } from './escova.component';

describe('EscovaComponent', () => {
  let component: EscovaComponent;
  let fixture: ComponentFixture<EscovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscovaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
