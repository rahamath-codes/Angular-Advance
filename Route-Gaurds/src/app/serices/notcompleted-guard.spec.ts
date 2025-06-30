import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { notcompletedGuard } from './notcompleted-guard';

describe('notcompletedGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => notcompletedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
