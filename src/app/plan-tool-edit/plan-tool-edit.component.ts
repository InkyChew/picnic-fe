import { Component, computed, signal, WritableSignal } from '@angular/core';
import { PlanTool } from '../models/plan';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanService } from '../services/plan.service';
import { User } from '../models/user';
import { MTagBoxComponent } from '../m-tag-box/m-tag-box.component';

@Component({
  selector: 'app-plan-tool-edit',
  standalone: true,
  imports: [ReactiveFormsModule, MTagBoxComponent],
  templateUrl: './plan-tool-edit.component.html',
  styleUrl: './plan-tool-edit.component.scss'
})
export class PlanToolEditComponent {

  tool: PlanTool = new PlanTool(1);
  participants: WritableSignal<User[]> = signal([]);
  readonly participantNames = computed(() => this.participants().map(p => p.name));
  preparerNames: WritableSignal<string[]> = signal([]);
  readonly preparers = computed(() => this.participants().filter(p => this.preparerNames().includes(p.name)));

  toolForm: FormGroup = this._fb.group({
    name: [this.tool.name, Validators.required],
    note: [this.tool.note],
    preparer: [this.preparerNames(), Validators.required],
    price: [this.tool.price, Validators.min(0)],
    count: [this.tool.count, Validators.min(1)],
  });

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _fb: FormBuilder,
    private _service: PlanService) {
    this._route.params.subscribe(param => {
      const id = +param['id'];
    });
  }

  ngOnInit() {
    this.getParticipants();    
  }

  getParticipants() {
    const a = new User(); a.name = 'Apple';
    const b = new User(); b.name = 'Banana';
    const c = new User(); c.name = 'Choco';
    this.participants.set([a, b, c]);
    this.preparerNames.set(['Apple']);
  }

  save() {
    console.log(this.preparers());
    // if (this.toolForm.valid) {
    //   const updatedPlan = { ...this.tool, ...this.toolForm.value };

    //   const save$ = this.tool.id
    //     ? this._service.putPlan(updatedPlan)
    //     : this._service.postPlan(updatedPlan);

    //   save$.subscribe({
    //     next: (res) => {
    //       this._router.navigate(['/plan-tool', res.id]);
    //     },
    //     error: (err) => {
    //       console.error('Error saving tool', err);
    //     }
    //   });
    // }
  }
}
