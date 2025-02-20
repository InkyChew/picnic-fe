import { Component, computed, signal, WritableSignal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanFood, PlanUser } from '../models/plan';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MTagBoxComponent } from '../m-tag-box/m-tag-box.component';
import { User } from '../models/user';
import { PlanFoodService } from '../services/plan-food.service';

@Component({
  selector: 'app-plan-food-edit',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule, MTagBoxComponent],
  templateUrl: './plan-food-edit.component.html',
  styleUrl: './plan-food-edit.component.scss'
})
export class PlanFoodEditComponent {

  planId: number = 0;
  food: PlanFood = new PlanFood(this.planId);
  participants: WritableSignal<PlanUser[]> = signal([]);
  readonly participantNames = computed(() => this.participants().map(p => p.user!.name));
  readonly preparers = computed(() => this.participants().filter(p => this.foodForm.value.preparer.includes(p.user!.name)));

  foodForm: FormGroup = this._fb.group({
    name: [this.food.name, Validators.required],
    note: [this.food.note],
    preparer: [[], Validators.required],
    price: [this.food.price, Validators.min(0)],
    count: [this.food.count, Validators.min(1)],
  });

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _fb: FormBuilder,
    private _service: PlanFoodService) {
    this._route.params.subscribe(qp => {
      this.planId = qp['planId'];
    });

    this._route.params.subscribe(p => {
      const id = +p['id'];
      if (id) this.getPlanFood(id);
    });
  }

  ngOnInit() {
    this.getParticipants();
  }

  getPlanFood(id: number) {
    this._service.getPlanFood(id).subscribe({
      next: (res) => this.food = res,
      error: (err) => {
        console.error(err);        
        this.goBack();
      }
    });
  }

  getParticipants() {
    const a = new PlanUser(1); a.user = new User(); a.user.name = "Apple";
    const b = new PlanUser(2); b.user = new User(); b.user.name = "Banana";
    const c = new PlanUser(3); c.user = new User(); c.user.name = "Coconut";
    this.participants.set([a, b, c]);
    this.foodForm.get('preparer')?.setValue(['Apple']);
  }

  save() {
    if (this.foodForm.valid) {
      const updatedPlan = { ...this.food, ...this.foodForm.value };

      const save$ = this.food.id
        ? this._service.putPlanFood(updatedPlan)
        : this._service.postPlanFood(updatedPlan);

      save$.subscribe({
        next: (res) => {
          this.goBack();
        },
        error: (err) => {
          console.error('Error saving plan', err);
        }
      });
    }
  }

  goBack() {
    this._router.navigate(['plan-food', this.planId]);
  }
}
