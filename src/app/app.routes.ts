import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanEditComponent } from './plan-edit/plan-edit.component';
import { PlanComponent } from './plan/plan.component';
import { PlanFoodComponent } from './plan-food/plan-food.component';
import { PlanFoodEditComponent } from './plan-food-edit/plan-food-edit.component';
import { PlanToolComponent } from './plan-tool/plan-tool.component';
import { PlanToolEditComponent } from './plan-tool-edit/plan-tool-edit.component';
import { PlanUserComponent } from './plan-user/plan-user.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'plan/:id', component: PlanComponent, pathMatch: 'full' },
    { path: 'plan-edit', component: PlanEditComponent, pathMatch: 'full' },
    { path: 'plan-user/:planId', component: PlanUserComponent, pathMatch: 'full' },
    { path: 'plan-food/:planId', component: PlanFoodComponent, pathMatch: 'full' },
    { path: 'plan-food-edit/:planId', component: PlanFoodEditComponent, pathMatch: 'full' },
    { path: 'plan-tool/:planId', component: PlanToolComponent, pathMatch: 'full' },
    { path: 'plan-tool-edit/:planId', component: PlanToolEditComponent, pathMatch: 'full' },
];
