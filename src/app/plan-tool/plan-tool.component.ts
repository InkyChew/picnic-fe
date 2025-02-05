import { Component } from '@angular/core';
import { PlanTool } from '../models/plan';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-plan-tool',
  standalone: true,
  imports: [RouterLink, CdkDropList, CdkDrag, CdkDragPlaceholder],
  templateUrl: './plan-tool.component.html',
  styleUrl: './plan-tool.component.scss'
})
export class PlanToolComponent {

  tools: any[] = [{name: '123'}, {name: '456'}];

  drop(e: CdkDragDrop<any, any>): any {
    console.log(e);
    if(e.distance.x < -150) {
      this.tools.splice(e.currentIndex, 1);
    }
  }
}
