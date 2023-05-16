import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CortesMasculinosComponent } from './cortes-masculinos.component';

describe('CortesMasculinosComponent', () => {
  let component: CortesMasculinosComponent;
  let fixture: ComponentFixture<CortesMasculinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CortesMasculinosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CortesMasculinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
