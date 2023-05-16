import { TestBed } from '@angular/core/testing';

import { NossosservicosService } from './nossosservicos.service';

describe('NossosservicosService', () => {
  let service: NossosservicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NossosservicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
