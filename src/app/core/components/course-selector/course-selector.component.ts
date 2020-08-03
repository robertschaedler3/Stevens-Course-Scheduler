import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { ScheduleSharedViewStateService } from 'src/app/services/schedule-shared-view-state.service';
import { Course } from 'src/app/types/scheduler';

@Component({
  selector: 'app-course-selector',
  templateUrl: './course-selector.component.html',
  styleUrls: ['./course-selector.component.scss']
})
export class CourseSelectorComponent implements OnInit {

  ctrl = new FormControl();
  courses: Course[] = [];
  filteredCourses: Observable<Course[]>;

  constructor(public scheduleData: ScheduleSharedViewStateService) {
    this.scheduleData.courses$.subscribe(courses => this.courses = courses);
  }

  ngOnInit() {
    this.filteredCourses = this.ctrl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): Course[] {
    const filterValue = value.toLowerCase();

    return this.courses.filter(course => course.section.toLowerCase().includes(filterValue)).slice(0, 10);
  }

}
