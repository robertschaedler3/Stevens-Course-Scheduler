import { Component, OnInit } from '@angular/core';
import { SchedulerService } from '../scheduler/scheduler.service';

@Component({
  selector: 'app-selected-options',
  templateUrl: './selected-options.component.html',
  styleUrls: ['./selected-options.component.scss']
})
export class SelectedOptionsComponent implements OnInit {

  selected: string[];
  courses = {};

  constructor(public scheduler: SchedulerService) { }

  ngOnInit() {
    this.scheduler.selected.subscribe(data => this.selected = data);
    this.scheduler.courses.subscribe(data => this.courses = data);
  }

  getSection(section: string): string {
    let start = 0;
    for (let i = section.length - 1; i > 0; i--) {
      if (!isNaN(parseInt(section.charAt(i)))) {
        break;
      }
      start = i;
    }
    return section.substring(start);
  }

}
