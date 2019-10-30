import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

import { DayColumnComponent } from './day-column/day-column.component';
import { SchedulerService } from 'app/scheduler/scheduler.service';

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

  sections = {};

  constructor(public scheduler: SchedulerService) { }

  ngAfterViewInit() {
    this.scheduler.sections.subscribe(data => this.renderSections(data))
  }

  private renderSections(data) {
    this.sections = data;
    this.cols.forEach(col => {
      col.reset();
    })
    Object.keys(this.sections).forEach(section => {
      this.sections[section].daysTimeLocation.forEach(location => {
        let classPeriod = this.sections[section];
        this.displayCourse(classPeriod.title, classPeriod.callNumber, classPeriod.section, location.startTime, location.endTime, location.day);
      })
    })
  }


  displayCourse(name, id, code, start, end, weekdays) {
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
      col.addCourse(name, code, id, start, end);
    }
  }

  private getColumn(day: string) {
    let result = null;
    this.cols.forEach(column => {
      if (column.day === day) {
        result = column;
      }
    })
    return result;
  }

}
