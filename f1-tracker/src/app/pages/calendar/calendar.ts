import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Formula1Service } from '../../formula1-service';
import { IMeeting, IMeetings } from '../../interfaces/i-meeting';

@Component({
  selector: 'app-calendar',
  imports: [],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css',
})
export class Calendar {
  private formula1service: Formula1Service = inject(Formula1Service);

  meetings: WritableSignal<IMeetings | null> = signal(null);

  ngOnInit(): void {
    this.formula1service.getCalendar().subscribe((dati: IMeetings) => {
      this.meetings.set(dati);
    })
  }



}
