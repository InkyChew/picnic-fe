import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  datetimeLocal(dt: string | number | Date): string {
    return formatDate(dt, 'yyyy-MM-ddTHH:mm:ss', 'en-US');
  }
}
