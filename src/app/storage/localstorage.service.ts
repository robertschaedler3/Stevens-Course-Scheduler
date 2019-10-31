import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  anotherTodolist = [];

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public saveSchedule(name, data) {
    let scheduleNames = this.storage.get('schedules') || [];
    if (scheduleNames.indexOf(name) > 0) {
      if (!confirm("Overwrite a schedule with the same name: " + name)) {
        return;
      }
    }
    scheduleNames.push(name);
    this.storage.set('schedules', scheduleNames);
    this.storage.set(name, data);
  }

  public removeSchedule(name) {
    let scheduleNames: Array<string> = this.storage.get('schedules') || [];
    scheduleNames.splice(scheduleNames.indexOf(name), 1);
    this.storage.set('schedules', scheduleNames);
    this.storage.remove(name);
  }

  public getNames() {
    return this.storage.get('schedules') || [];
  }

  public getSchedule(name) {
    return this.storage.get(name) || [];
  }

  clear() {
    this.storage.clear();
  }
}