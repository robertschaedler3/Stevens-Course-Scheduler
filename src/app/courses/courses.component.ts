import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { RawSection } from '../scheduler.model';
import { ApiService } from '../api.service';

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
  terms: String[]
  courseKeys: string[]
  selectedCourses: String[];
  courses: {};


  constructor(public api: ApiService) { }

  ngOnInit() {
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
    const filterValue = value.toLowerCase();
    let keys = Object.keys(this.courses);
    let end = (this.courseKeys.length > 10) ? 50 : this.courseKeys.length - 1;
    return this.courseKeys.filter(option => option.toLowerCase().includes(filterValue)).slice(0, end);
  }

  public termChanged(event): void {  // event will give you full brief of action
    const term = event.value;
    this.selectedTerm = term;
    this.api.getCourses(term).subscribe(courses => {
      this.processCourses(courses);
    });
    console.log("Selected:" + term);
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

  public processCourses(rawSections: RawSection[]) {
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

    // console.log(this.courses);
  }



}