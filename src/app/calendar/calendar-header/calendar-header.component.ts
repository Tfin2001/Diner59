import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-calendar-header',
  templateUrl: './calendar-header.component.html'
})
export class CalendarHeaderComponent {
  @Input() view: CalendarView;
  @Input() viewDate: Date;
  @Input() locale = 'en';
  @Output() viewChange: EventEmitter<CalendarView> = new EventEmitter();
  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();
  CalendarView = CalendarView;
}
