import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Formula1Service {
  public getCalendar(): Observable<null> {
    return null;
  }
}
