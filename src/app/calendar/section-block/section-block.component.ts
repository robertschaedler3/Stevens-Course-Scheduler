import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-section-block',
  templateUrl: './section-block.component.html',
  styleUrls: ['./section-block.component.scss']
})
export class SectionBlockComponent implements OnInit {

  @Input() startTime: string;
  @Input() endTime: string;

  @Input() name: string;
  @Input() id: string;

  @ViewChild('mainCard', { static: false }) card: ElementRef;

  constructor() {

  }

  ngOnInit() {
    // this.card.nativeElement.style = ""

  }

}
