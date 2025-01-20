import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  constructor() { }

  get APIOption(): IRestAPIOption {
    return {
      planEndpoint: `${environment.api.url}${environment.api.endpoint.plan}`,
      planUserEndpoint: `${environment.api.url}${environment.api.endpoint.planUser}`,
    }
  }
}

interface IRestAPIOption {
  planEndpoint: string,
  planUserEndpoint: string,
}