import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlanTool } from '../models/plan';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class PlanToolService {

  constructor(private _http: HttpClient, private _env: EnvService) { }

  getPlanTools(planId: number) {
    const params = new HttpParams().set('planId', planId);
    return this._http.get<PlanTool[]>(this._env.APIOption.planToolEndpoint, { params });
  }

  getPlanTool(id: number) {
    return this._http.get<PlanTool>(`${this._env.APIOption.planToolEndpoint}/${id}`);
  }

  postPlanTool(tool: PlanTool) {
    return this._http.post<PlanTool>(this._env.APIOption.planToolEndpoint, tool);
  }

  putPlanTool(tool: PlanTool) {
    return this._http.put<PlanTool>(this._env.APIOption.planToolEndpoint, tool);
  }
}
