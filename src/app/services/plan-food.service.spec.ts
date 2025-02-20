import { TestBed } from '@angular/core/testing';

import { PlanFoodService } from './plan-food.service';

describe('PlanFoodService', () => {
  let service: PlanFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
