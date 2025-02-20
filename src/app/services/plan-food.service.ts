import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlanFood } from '../models/plan';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class PlanFoodService {

  constructor(private _http: HttpClient, private _env: EnvService) { }

  getPlanFoods(planId: number) {
    const params = new HttpParams().set('planId', planId);
    return this._http.get<PlanFood[]>(this._env.APIOption.planToolEndpoint, { params });
  }

  getPlanFood(id: number) {
    return this._http.get<PlanFood>(`${this._env.APIOption.planToolEndpoint}/${id}`);
  }

  postPlanFood(tool: PlanFood) {
    return this._http.post<PlanFood>(this._env.APIOption.planToolEndpoint, tool);
  }

  putPlanFood(tool: PlanFood) {
    return this._http.put<PlanFood>(this._env.APIOption.planToolEndpoint, tool);
  }
}
