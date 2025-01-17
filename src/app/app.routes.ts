import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanEditComponent } from './plan-edit/plan-edit.component';
import { PlanComponent } from './plan/plan.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'plan', component: PlanComponent, pathMatch: 'full' },
    { path: 'plan/:id', component: PlanEditComponent, pathMatch: 'full' },
];
