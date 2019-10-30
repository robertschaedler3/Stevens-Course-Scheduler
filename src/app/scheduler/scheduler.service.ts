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

  removeSelected(key: string) {
    key = key.split(":")[1].trim();
    this.selectedData.splice(this.selectedData.indexOf(key));
    this.selectedList.next(this.selectedData);
    Object.keys(this.sectionData).forEach(section => {
      if (this.sectionData[section].title === key) {
        delete this.sectionData[section];
      }
    })
    this.sectionDict.next(this.sectionData);
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
