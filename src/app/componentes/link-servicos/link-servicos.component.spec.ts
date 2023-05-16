import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkServicosComponent } from './link-servicos.component';

describe('LinkServicosComponent', () => {
  let component: LinkServicosComponent;
  let fixture: ComponentFixture<LinkServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkServicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
