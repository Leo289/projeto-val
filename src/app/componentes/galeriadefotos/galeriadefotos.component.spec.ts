import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriadefotosComponent } from './galeriadefotos.component';

describe('GaleriadefotosComponent', () => {
  let component: GaleriadefotosComponent;
  let fixture: ComponentFixture<GaleriadefotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriadefotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriadefotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
