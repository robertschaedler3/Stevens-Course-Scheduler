import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  private sectionData = {};
  private selectedData = [];
  private coursesData = {}

  private sectionDict = new BehaviorSubject({});
  sections = this.sectionDict.asObservable();

  private selectedList = new BehaviorSubject(['']);
  selected = this.selectedList.asObservable();

  private coursesDict = new BehaviorSubject({});
  courses = this.coursesDict.asObservable();

  constructor() { }

  addSelected(key) {
    this.selectedData.push(key);
    this.selectedList.next(this.selectedData);
  }

  removeSelected(course: string, credits) {
    let index = this.selectedData.indexOf(course)
    this.selectedData.splice(index, 1);
    course = course.split(":")[1].trim();
    let creditCount = 0;
    Object.keys(this.sectionData).forEach(section => {
      console.log("Section: " + section);
      if (this.sectionData[section].title === course) {
        console.log("deleting: " + course);
        creditCount += credits;
        delete this.sectionData[section];
      }
    })
    this.selectedList.next(this.selectedData);
    this.sectionDict.next(this.sectionData);
    return creditCount;
  }

  setCourses(courses) {
    this.coursesData = courses;
    this.coursesDict.next(this.coursesData);
  }

  toggleSection(section, callNumber) {
    if (this.sectionData[callNumber]) {
      delete this.sectionData[callNumber];
    } else {
      this.sectionData[callNumber] = section;
    }
    this.sectionDict.next(this.sectionData)
  }

}
