import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarComponent } from './components/calendar/calendar.component';
import { CourseSelectorComponent } from './components/course-selector/course-selector.component';
import { TermSelectorComponent } from './components/term-selector/term-selector.component';


@NgModule({
  declarations: [
    CalendarComponent,
    CourseSelectorComponent,
    TermSelectorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
