import { TestBed } from '@angular/core/testing';

import { ClimateService } from './climate.service';

describe('ClimateService', () => {
  let service: ClimateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClimateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
