import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isLacturerGuard } from './is-lacturer.guard';

describe('isLacturerGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isLacturerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
