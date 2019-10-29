import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import { CoursesComponent } from '../../courses/courses.component';
import { CalendarComponent } from '../../calendar/calendar.component';
import { DayColumnComponent } from '../../calendar/day-column/day-column.component';

import { ColumnLoaderService } from '../../calendar/services/column-loader.service';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatGridListModule,
  MatProgressBarModule
} from '@angular/material';
import { SectionBlockComponent } from '../../calendar/section-block/section-block.component';
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
    MatProgressBarModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    NotificationsComponent,
    UpgradeComponent,
    CoursesComponent,
    CalendarComponent,
    SectionBlockComponent,
    SelectedOptionsComponent,
    DayColumnComponent
  ],
  providers: [ColumnLoaderService],
  entryComponents: [DayColumnComponent]
})

export class AdminLayoutModule { }
