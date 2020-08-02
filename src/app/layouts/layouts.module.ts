import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';

// Layout Components
import { SchedulerComponent } from './scheduler/scheduler.component';


@NgModule({
  declarations: [SchedulerComponent],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [SchedulerComponent]
})
export class LayoutsModule { }
