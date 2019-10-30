import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { RawSection } from '../scheduler.model';
import { ApiService } from '../api.service';
import { SchedulerService } from 'app/scheduler/scheduler.service';

export interface Term {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  myControl = new FormControl();
  options: string[];
  filteredOptions: Observable<string[]>;

  selectedTerm: String;
  terms: String[];
  courseKeys: string[];
  selectedCourses: string[] = [];
  courses: {};

  constructor(public api: ApiService, public scheduler: SchedulerService) { }

  ngOnInit() {
    this.scheduler.selected.subscribe(data => this.selectedCourses = data);
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    this.api.getTerms().subscribe(terms => {
      this.terms = terms;
      this.selectedTerm = terms[0];
      this.api.getCourses(terms[0]).subscribe(rawSections => {
        this.processCourses(rawSections);
      })
    })
  }

  private _filter(value: string): string[] {
    if (value != null) {
      const filterValue = value.toLowerCase();
      let end = (this.courseKeys.length > 10) ? 50 : this.courseKeys.length - 1;
      return this.courseKeys.filter(option => option.toLowerCase().includes(filterValue) && !this.selectedCourses.includes(option)
      ).slice(0, end);
    }
    return [''];
  }

  termChanged(event): void {
    const term = event.value;
    this.selectedTerm = term;
    this.api.getCourses(term).subscribe(courses => {
      this.processCourses(courses);
    });
  }

  private getSectionAbrv(section: String): String {
    var newEnd = section.length;
    for (let i = section.length - 1; i > 0; i--) {
      if (isNaN(parseInt(section.charAt(i)))) {
        newEnd -= 1;
      } else {
        break;
      }
    }
    if (newEnd === section.length) {
      return section;
    } else {
      return section.substring(0, newEnd);
    }
  }

  private processCourses(rawSections: RawSection[]) {
    this.courses = {};
    rawSections.forEach(section => {
      let key = this.getSectionAbrv(section.section) + ": " + section.title;
      if (this.courses[key]) {
        this.courses[key].push(section);
      } else {
        this.courses[key] = [];
        this.courses[key].push(section);
      }
    });
    this.courseKeys = Object.keys(this.courses);
    this.scheduler.setCourses(this.courses);
  }

  selectCourse(key: string) {
    this.scheduler.addSelected(key);
    this.myControl.reset();
  }

}
