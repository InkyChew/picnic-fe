import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanFoodComponent } from './plan-food.component';

describe('PlanFoodComponent', () => {
  let component: PlanFoodComponent;
  let fixture: ComponentFixture<PlanFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanFoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
