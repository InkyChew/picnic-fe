import { Pipe, PipeTransform } from '@angular/core';
import { InvitationStatus } from '../models/plan';

@Pipe({
  name: 'invStt',
  standalone: true
})
export class InvitationStatusPipe implements PipeTransform {

  transform(status: InvitationStatus, ...args: unknown[]): unknown {
    const chstr = ["婉拒", "邀請中", "參加"];
    const enstr = ["Reject", "Pending", "Accept"];
    return chstr[status];
  }

}
