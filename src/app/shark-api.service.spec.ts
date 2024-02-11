import { TestBed } from '@angular/core/testing';

import { SharkApiService } from './shark-api.service';

describe('SharkApiService', () => {
  let service: SharkApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharkApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

