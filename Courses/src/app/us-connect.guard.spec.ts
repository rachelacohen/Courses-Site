import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { usConnectGuard } from './us-connect.guard';

describe('usConnectGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => usConnectGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
