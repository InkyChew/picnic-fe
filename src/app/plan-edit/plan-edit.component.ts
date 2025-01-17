import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from '../models/plan';

@Component({
  selector: 'app-plan-edit',
  standalone: true,
  imports: [],
  schemas: [],
  templateUrl: './plan-edit.component.html',
  styleUrl: './plan-edit.component.scss'
})
export class PlanEditComponent {

  plan: Plan = new Plan();

  constructor(private _router: Router) { }

  save() {
    if(this.plan.id) {
      this._router.navigate(['plan', this.plan.id]);
    }
  }
}
