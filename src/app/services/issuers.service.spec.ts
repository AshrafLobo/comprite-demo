import { TestBed } from '@angular/core/testing';

import { IssuersService } from './issuers.service';

describe('IssuersService', () => {
  let service: IssuersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssuersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
