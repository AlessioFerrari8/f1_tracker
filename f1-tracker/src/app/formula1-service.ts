import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { IMeetings } from './interfaces/i-mettings';
import { IDriver } from './interfaces/i-driver';

@Injectable({
  providedIn: 'root',
})
export class Formula1Service {
  // client http per gestire richieste
  private httpClient: HttpClient = inject(HttpClient);

  // all urls I'll use
  private urls: string[] = [
    'https://api.openf1.org/v1/meetings?year=2026',
    'https://api.openf1.org/v1/drivers?driver_number=1&session_key=9158',
  ]

  public getCalendar(): Observable<IMeetings> {
    let url = this.urls[0];
    return this.httpClient.get<IMeetings>(url).pipe(
      catchError(() => of([]))
    );
  }

  public getDriver(driver_number: number): Observable<IDriver> {
    // 'https://api.openf1.org/v1/drivers?driver_number=1&session_key=9158',
    let url = this.urls[1];
    return this.httpClient.get<IDriver>(url).pipe(
      catchError(() => of())
    );
  }

}
