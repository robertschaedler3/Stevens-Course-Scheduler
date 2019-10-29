import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-block',
  templateUrl: './section-block.component.html',
  styleUrls: ['./section-block.component.scss']
})
export class SectionBlockComponent {

  height = 60;
  @Input() start;
  @Input() end;
  @Input() name;
  @Input() id;

  private offset = 25;

  private timeToPixels(time: string) {
    let parts = time.split(':');
    return (parseInt(parts[0]) - 4 - 8) * 60 + parseInt(parts[1]) + this.offset;
  }

  startTime() {
    return (this.timeToPixels(this.start)).toString() + "px";
  }

  duration() {
    return (this.timeToPixels(this.end) - this.timeToPixels(this.start)).toString() + 'px';
  }

}
