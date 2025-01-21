import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PlanUserService } from '../services/plan-user.service';
import { PlanUser } from '../models/plan';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, DatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  planUserList: PlanUser[] = [];

  constructor(private _planUserService: PlanUserService) { }

  ngOnInit() {
    this.getUserPlans();
  }

  getUserPlans() {
    this._planUserService.getUserPlans(1).subscribe(res => this.planUserList = res);
  }
}
