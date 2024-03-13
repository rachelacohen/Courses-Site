import { TestBed } from '@angular/core/testing';

import { LacturerService } from './lacturer.service';

describe('LacturerService', () => {
  let service: LacturerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LacturerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
