import { Component, OnInit } from '@angular/core';

export const WEEKDAYS: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export const TIMES: number[] = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  weekDays: string[] = WEEKDAYS;
  times: number[] = TIMES;

  constructor() { }

  ngOnInit(): void {
  }

}
