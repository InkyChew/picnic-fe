import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanFoodEditComponent } from './plan-food-edit.component';

describe('PlanFoodEditComponent', () => {
  let component: PlanFoodEditComponent;
  let fixture: ComponentFixture<PlanFoodEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanFoodEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanFoodEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
