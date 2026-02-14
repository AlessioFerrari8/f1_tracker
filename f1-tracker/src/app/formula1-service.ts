import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMeetings } from './interfaces/i-mettings';

@Injectable({
  providedIn: 'root',
})
export class Formula1Service {
  // client http per gestire richieste
  private httpClient: HttpClient = inject(HttpClient);

  // all urls I'll use
  private urls: string[] = [
    'https://api.openf1.org/v1/meetings?year=2026',

  ]

  public getCalendar(): Observable<IMeetings | null> {
    let url = this.urls[0];
    return null;

  }
}
