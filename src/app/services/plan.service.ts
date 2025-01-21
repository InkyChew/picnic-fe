import { Injectable } from '@angular/core';
import { Plan } from '../models/plan';
import { EnvService } from './env.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private _http: HttpClient, private _env: EnvService) { }

  getPlan(id: number) {
    return this._http.get<Plan>(`${this._env.APIOption.planEndpoint}/${id}`);
  }

  postPlan(plan: Plan) {
    this._formatPlanTime(plan);
    return this._http.post<Plan>(this._env.APIOption.planEndpoint, plan);
  }

  putPlan(plan: Plan) {
    this._formatPlanTime(plan);
    return this._http.put<Plan>(this._env.APIOption.planEndpoint, plan);
  }

  deletePlan(id: number) {
    return this._http.delete(`${this._env.APIOption.planEndpoint}/${id}`);
  }

  private _formatPlanTime(plan: Plan) {
    plan.startTime = new Date(plan.startTime).toISOString();
    plan.endTime = new Date(plan.endTime).toISOString();
  }
}
