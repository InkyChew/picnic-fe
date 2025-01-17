import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.scss'
})
export class PlanComponent {

  constructor(private _route: ActivatedRoute,
    private _router: Router) {
    this._route.params.subscribe(param => {
      const id = +param['id'];
    });
  }

  getPlan() {

  }
}
