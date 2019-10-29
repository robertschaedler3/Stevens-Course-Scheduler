import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  private selectedData = [];
  private coursesData = {}

  private selectedList = new BehaviorSubject(['']);
  selected = this.selectedList.asObservable();

  private coursesDict = new BehaviorSubject({});
  courses = this.coursesDict.asObservable();


  constructor() { }

  addSelected(key) {
    this.selectedData.push(key);
    this.selectedList.next(this.selectedData);
    console.log(this.coursesData[key]);
  }

  setCourses(courses) {
    this.coursesData = courses;
    this.coursesDict.next(this.coursesData);
  }

}
