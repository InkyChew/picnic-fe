import { TestBed } from '@angular/core/testing';

import { PlanUserService } from './plan-user.service';

describe('PlanUserService', () => {
  let service: PlanUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
