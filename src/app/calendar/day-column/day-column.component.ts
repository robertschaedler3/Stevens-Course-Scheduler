import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day-column',
  templateUrl: './day-column.component.html',
  styleUrls: ['./day-column.component.scss']
})
export class DayColumnComponent implements OnInit {

  sections = {};
  ids = [];
  hours: String[] = ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM"];

  @Input() day: string = '';

  constructor() { }

  ngOnInit() { }

  public addCourse(name, code, id, start, end) {
    this.ids.push(id);
    this.sections[id] = {
      'name': name,
      'code': code,
      'start': start,
      'end': end
    }
  }

  reset() {
    this.sections = {}
    this.ids = [];
  }

}
