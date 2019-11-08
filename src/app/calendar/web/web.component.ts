import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {

  sections = {};
  ids = [];

  constructor() { }

  ngOnInit() { }

  public addCourse(name, code, id) {
    this.ids.push(id);
    this.sections[id] = {
      'name': name,
      'code': code,
    }
  }

  reset() {
    this.sections = {}
    this.ids = [];
  }

}
