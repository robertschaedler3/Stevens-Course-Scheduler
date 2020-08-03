import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../types/scheduler';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private url: string = environment.schedulerUrl;

  constructor(private http: HttpClient) { }

  getTerms(): Observable<string[]> {
    return this.http.get<string[]>(this.url + 'terms');
  }

  getTerm(term: string): Observable<Course[]> {
    return this.http.get<Course[]>(this.url + term);
  }

  getDescription(term: string): Observable<string> {
    return this.http.get<string>(this.url + 'desc/' + term);
  }

}
