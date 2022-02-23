import { TestBed } from '@angular/core/testing';

import { RestoAuthService } from './resto.auth.service';

describe('AuthService', () => {
  let service: RestoAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestoAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
