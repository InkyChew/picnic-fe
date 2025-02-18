import { Component } from '@angular/core';
import { PlanTool } from '../models/plan';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PlanToolService } from '../services/plan-tool.service';

@Component({
  selector: 'app-plan-tool',
  standalone: true,
  imports: [RouterLink, CdkDropList, CdkDrag, CdkDragPlaceholder],
  templateUrl: './plan-tool.component.html',
  styleUrl: './plan-tool.component.scss'
})
export class PlanToolComponent {

  planId: number = 0;
  tools: PlanTool[] = [];

  constructor(private _route: ActivatedRoute,
    private _service: PlanToolService) {
    this._route.params.subscribe(p => {
      this.planId = +p['planId'];
      this.getTools();
    });
  }

  getTools() {
    this._service.getPlanTools(this.planId).subscribe(res => this.tools = res);
  }

  drop(e: CdkDragDrop<any, any>): any {
    console.log(e);
    if (e.distance.x < -150) {
      this.tools.splice(e.currentIndex, 1);
    }
  }
}
