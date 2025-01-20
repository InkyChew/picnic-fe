import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plan, PlanUser } from '../models/plan';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PlanService } from '../services/plan.service';

@Component({
  selector: 'app-plan-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  schemas: [],
  templateUrl: './plan-edit.component.html',
  styleUrl: './plan-edit.component.scss'
})
export class PlanEditComponent {

  plan: Plan = new Plan();
  planForm: FormGroup = this._fb.group({
    name: ['', Validators.required],
    description: [''],
    startTime: ['', [Validators.required]],
    endTime: ['', Validators.required],
    place: ['', Validators.required],
  });

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _fb: FormBuilder,
    private _service: PlanService) {
    this._route.params.subscribe(param => {
      const id = +param['id'];
      if(id) this.getPlan(id);
    });
  }

  getPlan(id: number) {
    this._service.getPlan(id).subscribe(res => {
      
      const x = {...res, startTime: new Date(res.startTime).toISOString()};
      this.planForm.patchValue(x);
      
      console.log(x);
      
    });
  }

  save() {
    this.plan = {...this.planForm.value};
    // this.plan.users = [new PlanUser(0, 1)]
    console.log(this.plan);
    console.log(this.planForm.valid);
    // if(this.planForm.valid) {
    //   const save$ = this.plan.id ? this._service.putPlan(this.plan) : this._service.postPlan(this.plan);
    //   save$.subscribe(res => {
    //     this._router.navigate(['/plan', res.id]);
    //   });
    // }
  }
}
