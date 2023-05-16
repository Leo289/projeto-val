import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CortesFemininosComponent } from './cortes-femininos.component';

describe('CortesFemininosComponent', () => {
  let component: CortesFemininosComponent;
  let fixture: ComponentFixture<CortesFemininosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CortesFemininosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CortesFemininosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
