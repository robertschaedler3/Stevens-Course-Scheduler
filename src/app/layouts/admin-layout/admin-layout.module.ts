import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import { CoursesComponent } from '../../courses/courses.component';
import { CalendarComponent } from '../../calendar/calendar.component';
import { DayColumnComponent } from '../../calendar/day-column/day-column.component';
import { SectionBlockComponent } from '../../calendar/section-block/section-block.component';


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
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
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
    UserProfileComponent,
    NotificationsComponent,
    UpgradeComponent,
    CoursesComponent,
    CalendarComponent,
    SelectedOptionsComponent,
    DayColumnComponent,
    SectionBlockComponent
  ]
})

export class AdminLayoutModule { }
