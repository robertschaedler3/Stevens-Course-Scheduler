import { Component, ViewChild, QueryList, OnInit, ViewContainerRef, Inject } from '@angular/core';

import { ColumnLoaderService } from './services/column-loader.service';

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

  @ViewChild('weekdays', {
    read: ViewContainerRef,
    static: true,
  }) viewContainerRef: ViewContainerRef

  hours: string[] = ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM"];
  days: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  service: any;

  dayCols = {};

  constructor(@Inject(ColumnLoaderService) service) {
    this.service = service
  }

  ngOnInit() {
    this.service.setRootViewContainerRef(this.viewContainerRef);
    this.days.forEach(day => {
      let component = this.service.addDynamicComponent();
      component.instance.day = day;
      this.dayCols[day] = component;
    });
    console.log(this.dayCols['Monday']);


  }

  displayCourse(weekdays: string, start: string) {
    for (let i = 0; i < weekdays.length; i++) {
      let col = null;
      switch (weekdays.charAt(i)) {
        case 'M':
          col = this.dayCols['Monday'].instance;
        case 'T':
          col = this.dayCols['Tuesday'].instance;
        case 'W':
          col = this.dayCols['Wednesday'].instance;
        case 'R':
          col = this.dayCols['Thursday'].instance;
        case 'F':
          col = this.dayCols['Friday'].instance;
      }

    }
  }

  test() {
    this.displayCourse('MWF', '11')
  }






}
