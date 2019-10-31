import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import * as _ from 'lodash';

import { RawSection } from './scheduler.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://stevens-scheduler.cfapps.io/p';
  terms$: Observable<string[]>;
  courses$: Observable<Array<RawSection>>;

  constructor(private http: HttpClient) {
    this.getTerms();
    this.preloadCourses();
  }

  private preloadCourses() {
    this.terms$.subscribe(terms => {
      this.courses$ = this.getCourses(terms[0])
    });
  }

  getTerms() {
    return this.terms$ = this.http.get<string[]>(this.baseUrl + '/terms').pipe(
      map(data => _.values(data)),
      // tap(console.log),
    );
  }

  getCourses(term: string) {
    return this.courses$ = this.http.get<Array<RawSection>>(this.baseUrl + '/' + term).pipe(
      map(data => _.values(data)),
      // tap(console.log),
    );
  }

  getDescription(section: string) {
    section.replace(" ", "%20");
    return this.http.get(this.baseUrl + '/desc/' + section, { responseType: 'text' });
  }

}
