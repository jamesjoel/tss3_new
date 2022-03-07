import { TestBed } from '@angular/core/testing';

import { AntibackdoorGuard } from './antibackdoor.guard';

describe('AntibackdoorGuard', () => {
  let guard: AntibackdoorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AntibackdoorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
