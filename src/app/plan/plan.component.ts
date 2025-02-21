import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Plan } from '../models/plan';
import { PlanService } from '../services/plan.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [RouterModule, DatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.scss'
})
export class PlanComponent {

  plan?: Plan;
  constructor(private _route: ActivatedRoute,
    private _service: PlanService) {
    this._route.params.subscribe(param => {
      const id = +param['id'];
      if(id) this.getPlan(id);
    });
  }

  getPlan(id: number) {
    this._service.getPlan(id).subscribe(res => this.plan = res);
  }
}
