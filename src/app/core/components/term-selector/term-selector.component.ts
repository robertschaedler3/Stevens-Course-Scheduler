import { Component, OnInit } from '@angular/core';
import { ScheduleSharedViewStateService } from 'src/app/services/schedule-shared-view-state.service';

@Component({
  selector: 'app-term-selector',
  templateUrl: './term-selector.component.html',
  styleUrls: ['./term-selector.component.scss']
})
export class TermSelectorComponent implements OnInit {

  constructor(public schduleData: ScheduleSharedViewStateService) { }

  ngOnInit(): void {
  }

  selectTerm(term: string) {
    this.schduleData.getTermCourses(term);
  }

}
