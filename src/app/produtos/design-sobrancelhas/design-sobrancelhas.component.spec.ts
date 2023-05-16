import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSobrancelhasComponent } from './design-sobrancelhas.component';

describe('DesignSobrancelhasComponent', () => {
  let component: DesignSobrancelhasComponent;
  let fixture: ComponentFixture<DesignSobrancelhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignSobrancelhasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignSobrancelhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
