import { Component, OnInit } from '@angular/core';


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
export class CalendarComponent implements OnInit {

  hours: String[] = ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM"];
  days: String[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  // mainGrid: Tile[] = [];
  mainGrid: number[] = [];

  tiles: Tile[] = [
    { text: '', cols: 1, rows: 1, color: '#fff' },
    { text: 'Monday', cols: 2, rows: 1, color: '#fff' },
    { text: 'Tuesday', cols: 2, rows: 1, color: '#fff' },
    { text: 'Wednesday', cols: 2, rows: 1, color: '#fff' },
    { text: 'Thursday', cols: 2, rows: 1, color: '#fff' },
    { text: 'Friday', cols: 2, rows: 1, color: '#fff' },

    { text: '8AM', cols: 1, rows: 4, color: '#ddd' },

    {
      text: "main", cols: 10, rows: 52, color: ''
    },

    { text: '9AM', cols: 1, rows: 4, color: '#ddd' },
    { text: '10AM', cols: 1, rows: 4, color: '#ddd' },
    { text: '11AM', cols: 1, rows: 4, color: '#ddd' },
    { text: '12PM', cols: 1, rows: 4, color: '#ddd' },
    { text: '1PM', cols: 1, rows: 4, color: '#ddd' },
    { text: '2PM', cols: 1, rows: 4, color: '#ddd' },
    { text: '3PM', cols: 1, rows: 4, color: '#ddd' },
    { text: '4PM', cols: 1, rows: 4, color: '#ddd' },
    { text: '5PM', cols: 1, rows: 4, color: '#ddd' },
    { text: '6PM', cols: 1, rows: 4, color: '#ddd' },
    { text: '7PM', cols: 1, rows: 4, color: '#ddd' },
    { text: '8PM', cols: 1, rows: 4, color: '#ddd' },
  ];


  constructor() {
    this.mainGrid = Array.from(Array(260), (x, i) => i);
  }

  ngOnInit() {

  }

  displayCourse() {
    let course = { days: 'M', start: '8:30', end: "9:45" };
    // this.mainGrid[60] = { text: '60', cols: 1, rows: 4, color: 'pink' }
  }

}
