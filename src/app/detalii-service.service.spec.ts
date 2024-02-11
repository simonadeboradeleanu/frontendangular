import { TestBed } from '@angular/core/testing';

import { DetaliiServiceService } from './detalii-service.service';

describe('DetaliiServiceService', () => {
  let service: DetaliiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetaliiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
