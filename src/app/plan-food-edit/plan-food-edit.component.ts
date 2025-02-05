import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanService } from '../services/plan.service';
import { PlanFood } from '../models/plan';

@Component({
  selector: 'app-plan-food-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './plan-food-edit.component.html',
  styleUrl: './plan-food-edit.component.scss'
})
export class PlanFoodEditComponent {

  food: PlanFood = new PlanFood(1);
  foodForm: FormGroup = this._fb.group({
    name: [this.food.name, Validators.required],
    note: [this.food.note],
    preparer: ['', Validators.required],
    price: [this.food.price, Validators.min(0)],
  });

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _fb: FormBuilder,
    private _service: PlanService) {
    this._route.params.subscribe(param => {
      const id = +param['id'];
    });
  }

  save() {
    if (this.foodForm.valid) {
      const updatedPlan = { ...this.food, ...this.foodForm.value };

      const save$ = this.food.id
        ? this._service.putPlan(updatedPlan)
        : this._service.postPlan(updatedPlan);

      save$.subscribe({
        next: (res) => {
          this._router.navigate(['/plan-food', res.id]);
        },
        error: (err) => {
          console.error('Error saving plan', err);
        }
      });
    }
  }
}
