import { TestBed } from '@angular/core/testing';

import { PlanToolService } from './plan-tool.service';

describe('PlanToolService', () => {
  let service: PlanToolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanToolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
