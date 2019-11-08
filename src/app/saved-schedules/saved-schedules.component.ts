import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'app/storage/localstorage.service';

@Component({
  selector: 'app-saved-schedules',
  templateUrl: './saved-schedules.component.html',
  styleUrls: ['./saved-schedules.component.scss']
})
export class SavedSchedulesComponent implements OnInit {

  names: Array<string>;
  schedules = {};

  constructor(private storage: LocalStorageService) { }

  ngOnInit() {
    this.names = this.storage.getNames();
    this.names.forEach(name => {
      this.schedules[name] = this.storage.getSchedule(name);
      console.log(this.storage.getSchedule(name))
    })
  }

  deleteAll() {
    this.storage.clear();
    location.reload()
  }

  delete(name) {
    this.storage.removeSchedule(name);
    location.reload()
  }

}
