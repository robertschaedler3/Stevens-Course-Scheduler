import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { DayColumnComponent } from '../../calendar/day-column/day-column.component';
import { SectionBlockComponent } from '../../calendar/section-block/section-block.component';
import { CanvasComponent } from '../../canvas/canvas.component';
import { CoursesComponent } from '../../courses/courses.component';
import { CalendarComponent } from '../../calendar/calendar.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatGridListModule,
  MatProgressBarModule,
  MatButtonToggleModule,
  MatDividerModule,
  MatListModule
} from '@angular/material';

import { SelectedOptionsComponent } from '../../selected-options/selected-options.component';
import { ScheduleStatsComponent } from '../../schedule-stats/schedule-stats.component';
import { SavedSchedulesComponent } from '../../saved-schedules/saved-schedules.component';
import { StudyplanComponent } from '../../studyplan/studyplan.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    StorageServiceModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatListModule
  ],
  declarations: [
    DashboardComponent,
    SavedSchedulesComponent,
    StudyplanComponent,
    CanvasComponent,
    CoursesComponent,
    CalendarComponent,
    SelectedOptionsComponent,
    DayColumnComponent,
    SectionBlockComponent,
    ScheduleStatsComponent,
  ]
})

export class AdminLayoutModule { }
