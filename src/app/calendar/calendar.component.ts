import { Component, AfterViewInit, ViewChild, ViewChildren, QueryList } from '@angular/core';


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

  @ViewChildren('weekdays') weekdayCols: QueryList<any>;

  hours: String[] = ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM"];
  days: String[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  // mainGrid: number[] = [];

  constructor() {
    // this.mainGrid = Array.from(Array(13 * 4), (x, i) => i);
  }

  ngAfterViewInit() {
    console.log("COLS")
    console.log(this.weekdayCols);

  }

  displayCourse() {
    let course = { days: 'M', start: '8:30', end: "9:45" };
    this.weekdayCols[0]
    // this.mainGrid[60] = { text: '60', cols: 1, rows: 4, color: 'pink' }
  }





}
