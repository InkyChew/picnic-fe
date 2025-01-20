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
    return this._http.post<Plan>(this._env.APIOption.planEndpoint, plan);
  }

  putPlan(plan: Plan) {
    return this._http.put<Plan>(this._env.APIOption.planEndpoint, plan);
  }

  deletePlan(id: number) {
    return this._http.delete(`${this._env.APIOption.planEndpoint}/${id}`);
  }
}
