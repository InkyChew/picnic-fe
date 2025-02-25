import { CdkDrag, CdkDragDrop, CdkDragPlaceholder, CdkDropList } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanUserService } from '../services/plan-user.service';
import { InvitationStatus, PlanUser } from '../models/plan';
import { User } from '../models/user';
import { InvitationStatusPipe } from '../pipes/invitation-status.pipe';

@Component({
  selector: 'app-plan-user',
  standalone: true,
  imports: [CdkDropList, CdkDrag, CdkDragPlaceholder, InvitationStatusPipe],
  templateUrl: './plan-user.component.html',
  styleUrl: './plan-user.component.scss'
})
export class PlanUserComponent {

  users: PlanUser[] = [];

  constructor(private _route: ActivatedRoute,
    private _service: PlanUserService) {
    this._route.params.subscribe(p => {
      const planId = +p['planId'];
      this.getPlanUsers(planId);
    });
  }

  getPlanUsers(planId: number) {
    const a = new PlanUser(1); a.user = new User(); a.user.name = "Apple"; a.status = 1;
    const b = new PlanUser(2); b.user = new User(); b.user.name = "Banana"; b.status = 0;
    const c = new PlanUser(3); c.user = new User(); c.user.name = "Coconut"; c.status = 2; c.isHost = true;
    this.users = [a, b, c];
  }

  styleStatus(status: InvitationStatus): string {
    let style = '';
    switch (status) {
      case InvitationStatus.Reject:
        style += "gainsboro"
        break;
      case InvitationStatus.Pending:
        style += "cornflowerblue"
        break;
      case InvitationStatus.Accept:
        style += "green"
        break;
    }
    return style;
  }

  drop(e: CdkDragDrop<any, any>): any {
    console.log(e);
    if (e.distance.x < -150) {
      this.users.splice(e.currentIndex, 1);
    }
  }
}
