import { TestBed } from '@angular/core/testing';

import { OceanApiServiceService } from './ocean-api.service.service';

describe('OceanApiServiceService', () => {
  let service: OceanApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OceanApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
