import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Course } from '../types/scheduler';
import { ScheduleService } from './schedule.service';

@Injectable({
  providedIn: 'root'
})
export class ScheduleSharedViewStateService {

  private selectedTerm = new BehaviorSubject<string>(undefined);

  terms$: Observable<string[]>;

  courses$: Observable<Course[]> = this.selectedTerm$.pipe(
    switchMap(term => this.scheduler.getTerm(term))
  );

  get selectedTerm$() {
    return this.selectedTerm.asObservable();
  }

  constructor(private scheduler: ScheduleService) {
    this.getTerms().subscribe(terms => this.getTermCourses(terms[0]));
  }

  getTerms() {
    return this.terms$ = this.scheduler.getTerms();
  }

  getTermCourses(term: string) {
    this.selectedTerm.next(term);
  }

}
