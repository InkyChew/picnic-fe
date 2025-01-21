import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvService } from './env.service';
import { PlanUser } from '../models/plan';

@Injectable({
  providedIn: 'root'
})
export class PlanUserService {

  constructor(private _http: HttpClient, private _env: EnvService) { }

  getUserPlans(userId: number) {
    return this._http.get<PlanUser[]>(`${this._env.APIOption.planUserEndpoint}/${userId}`);
  }
}
