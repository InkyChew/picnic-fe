import { Component, computed, signal, WritableSignal } from '@angular/core';
import { PlanTool, PlanUser } from '../models/plan';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MTagBoxComponent } from '../m-tag-box/m-tag-box.component';
import { PlanToolService } from '../services/plan-tool.service';
import { User } from '../models/user';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-plan-tool-edit',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule, MTagBoxComponent],
  templateUrl: './plan-tool-edit.component.html',
  styleUrl: './plan-tool-edit.component.scss'
})
export class PlanToolEditComponent {

  planId: number = 0;
  tool?: PlanTool;
  participants: WritableSignal<PlanUser[]> = signal([]);
  readonly participantNames = computed(() => this.participants().map(p => p.user!.name));
  readonly preparers = computed(() => this.participants().filter(p => this.toolForm.value.preparer.includes(p.user!.name)));

  toolForm: FormGroup = this._fb.group({
    name: ['', Validators.required],
    note: [''],
    preparer: [[], Validators.required],
    price: [0, Validators.min(0)],
    count: [1, Validators.min(1)],
  });

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _fb: FormBuilder,
    private _service: PlanToolService) {
    this._route.params.subscribe(p => {
      this.planId = +p['planId'];
      this.tool = new PlanTool(this.planId);
    });

    this._route.queryParams.subscribe(qp => {
      const id = +qp['id'];
      if (id) this.getPlanTool(id);
    });
  }

  ngOnInit() {
    this.getParticipants();
  }

  getPlanTool(id: number) {
    this._service.getPlanTool(id).subscribe({
      next: (res) => this.tool = res,
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
    this.toolForm.get('preparer')?.setValue(['Apple']);
  }

  save() {
    if (this.tool && this.toolForm.valid) {
      const updatedPlan = { ...this.tool, ...this.toolForm.value };

      const save$ = this.tool.id
        ? this._service.putPlanTool(updatedPlan)
        : this._service.postPlanTool(updatedPlan);

      save$.subscribe({
        next: (res) => {
          this.goBack();
        },
        error: (err) => {
          console.error('Error saving tool', err);
        }
      });
    }
  }

  goBack() {
    this._router.navigate(['plan-tool', this.planId]);
  }
}
