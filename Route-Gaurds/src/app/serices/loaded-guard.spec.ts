import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { loadedGuard } from './loaded-guard';

describe('loadedGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loadedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
