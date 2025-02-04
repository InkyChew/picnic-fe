import { Component } from '@angular/core';
import { PlanFood } from '../models/plan';

@Component({
  selector: 'app-plan-food',
  standalone: true,
  imports: [],
  templateUrl: './plan-food.component.html',
  styleUrl: './plan-food.component.scss'
})
export class PlanFoodComponent {
  foods: PlanFood[] = [];
}
