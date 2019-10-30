import { Component, OnInit } from '@angular/core';
import { SchedulerService } from 'app/scheduler/scheduler.service';

@Component({
  selector: 'app-schedule-stats',
  templateUrl: './schedule-stats.component.html',
  styleUrls: ['./schedule-stats.component.scss']
})
export class ScheduleStatsComponent implements OnInit {

  credits = 0;

  constructor(public scheduler: SchedulerService) { }

  ngOnInit() {
  }

}
