import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

import { DayColumnComponent } from './day-column/day-column.component';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements AfterViewInit {

  @ViewChildren(DayColumnComponent) cols: QueryList<any>

  hours: string[] = ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM"];
  days: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  service: any;

  dayCols = {};

  ngAfterViewInit() {
    console.log(this.cols)
    this.cols.forEach(col => console.log(col))
  }


  displayCourse(id: string, weekdays: string, start: string, end: string) {
    for (let i = 0; i < weekdays.length; i++) {
      let col = null;
      switch (weekdays.charAt(i)) {
        case 'M':
          col = this.getColumn('Monday');
          break;
        case 'T':
          col = this.getColumn('Tuesday');
          break;
        case 'W':
          col = this.getColumn('Wednesday');
          break;
        case 'R':
          col = this.getColumn('Thursday');
          break;
        case 'F':
          col = this.getColumn('Friday');
          break;
      }
      console.log(col);
      col.addCourse(id, start, end);
    }
  }

  private getColumn(day: string) {
    console.log("search:" + day)
    let result = null;
    this.cols.forEach(column => {
      console.log(column.day)
      if (column.day === day) {
        result = column;
      }
    })
    return result;
  }

  test() {
    this.displayCourse('12345', 'M', '11:00', '12:00');
    console.log(this.cols)
  }

}
