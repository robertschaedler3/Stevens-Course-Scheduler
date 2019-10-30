import { Component, OnInit } from '@angular/core';
import { SchedulerService } from '../scheduler/scheduler.service';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-selected-options',
  templateUrl: './selected-options.component.html',
  styleUrls: ['./selected-options.component.scss'],
  animations: [
    trigger('selectorState', [
      state('theme', style({
        background: '#9c1c30',
        color: '#fff'
      })),
      state('white', style({
        background: '#fff',
        color: '#eee'
      })),
      transition('theme => white', animate('1000ms ease-out')),
      transition('white => theme', animate('1000ms ease-in'))
    ])
  ]
})

export class SelectedOptionsComponent implements OnInit {

  selected: string[];
  courses = {};
  sections = {};

  credits = 0;

  constructor(public scheduler: SchedulerService) { }

  ngOnInit() {
    this.scheduler.selected.subscribe(data => this.selected = data);
    this.scheduler.courses.subscribe(data => this.courses = data);
    this.scheduler.sections.subscribe(data => this.sections = data);
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

  sectionToggled(event) {
    const section = event.value;
    const callNumber = section.callNumber;
    if (Object.keys(this.sections).indexOf(callNumber) >= 0) {
      this.credits -= section.credits;
    } else {
      this.credits += section.credits;
    }
    this.scheduler.toggleSection(section, callNumber);
  }

  details(course) {
    const callNumber = this.courses[course].callNumber;
    console.log(callNumber);
  }

  delete(course, credits) {
    this.credits -= this.scheduler.removeSelected(course, credits);
  }

}
