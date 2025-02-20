import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plan } from '../models/plan';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PlanService } from '../services/plan.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DateService } from '../services/date.service';
import { DatePipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-plan-edit',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule, DatePipe],
  schemas: [],
  templateUrl: './plan-edit.component.html',
  styleUrl: './plan-edit.component.scss'
})
export class PlanEditComponent {

  plan: Plan = new Plan();
  planForm: FormGroup = this._fb.group({
    name: [this.plan.name, Validators.required],
    description: [this.plan.description],
    startTime: [this.plan.startTime, [Validators.required]],
    endTime: [this.plan.endTime, Validators.required],
    placeId: [this.plan.placeId, Validators.required],
  });

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _fb: FormBuilder,
    private _service: PlanService,
    private _dateService: DateService) {
    this._route.params.subscribe(param => {
      const id = +param['id'];
      if (id) this.getPlan(id);
    });
  }

  getPlan(id: number) {
    this._service.getPlan(id).subscribe({
      next: (res) => {
        this.plan = res;
        res.startTime = this._dateService.datetimeLocal(res.startTime);
        res.endTime = this._dateService.datetimeLocal(res.endTime);
        this.planForm.patchValue(res);
      },
      error: (err: HttpErrorResponse) => {
        const msg = err.status == 404 ? 'Plan Not Found.' : err.message;
        alert(msg);
        this._router.navigate(['/']);
      }
    });
  }

  save() {
    if (this.planForm.valid) {
      const updatedPlan = { ...this.plan, ...this.planForm.value };

      const save$ = this.plan.id
        ? this._service.putPlan(updatedPlan)
        : this._service.postPlan(updatedPlan);

      save$.subscribe({
        next: (res) => {
          this._router.navigate(['/plan', res.id]);
        },
        error: (err) => {
          console.error('Error saving plan', err);
        }
      });
    }
  }
}
