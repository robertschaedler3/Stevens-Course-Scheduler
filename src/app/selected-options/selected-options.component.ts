import { Component, OnInit, Inject } from '@angular/core';
import { SchedulerService } from '../scheduler/scheduler.service';
import { LocalStorageService } from 'app/storage/localstorage.service';
import { ApiService } from 'app/api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface DialogData {
  schedules: string[];
}

declare var $: any;

@Component({
  selector: 'app-selected-options',
  templateUrl: './selected-options.component.html',
  styleUrls: ['./selected-options.component.scss']
})

export class SelectedOptionsComponent implements OnInit {

  selected: string[];
  courses = {};
  sections = {};

  credits = 0;

  constructor(
    private api: ApiService,
    public scheduler: SchedulerService,
    public storage: LocalStorageService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.scheduler.selected.subscribe(data => this.selected = data);
    this.scheduler.courses.subscribe(data => this.courses = data);
    this.scheduler.sections.subscribe(data => this.sections = data);
  }

  getSection(section: string): string {
    let start = 0;
    for (let i = section.length - 1; i > 0; i--) {
      if (!isNaN(parseInt(section.charAt(i)))) {
        break;
      }
      start = i;
    }
    return section.substring(start);
  }

  sectionToggled(event) {
    const section = event.value;
    const callNumber = section.callNumber;
    if (Object.keys(this.sections).indexOf(callNumber) >= 0) {
      this.credits -= section.credits;
    } else {
      this.credits += section.credits;
    }
    this.scheduler.toggleSection(section, callNumber);
  }

  details(course) {
    const section = this.courses[course][0].section;
    console.log(section);
    this.api.getDescription(section).subscribe(data => this.showNotification('top', 'left', section, data));
  }

  clear() {
    this.scheduler.clear();
    this.selected = [];
    this.sections = {};
    this.credits = 0;
  }

  loadSaved() {
    let names = this.storage.getNames();
    if (names.length > 0) {
      const dialogRef = this.dialog.open(ScheduleLoaderDialog, {
        width: '500px',
        data: { scheduleNames: names, selection: '' }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed: ' + result);
      });
    } else {
      this._snackBar.open('No saved schedules yet!', "Dismiss", {
        duration: 2000,
      });
    }

  }

  saveSchedule() {
    let name = prompt('Enter a name: ')
    let scheduleData = []
    Object.keys(this.sections).forEach(callNumber => {
      scheduleData.push(this.sections[callNumber]);
    })
    this.storage.saveSchedule(name, scheduleData);
  }

  delete(course, credits) {
    this.credits -= this.scheduler.removeSelected(course, credits);
  }

  private showNotification(from, align, section, desc) {
    const type = ['', 'info', 'success', 'warning', 'danger'];
    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: "short_text",
      message: section + "<hr><p>" + desc + "</p>"

    }, {
      type: type[color],
      timer: 5000,
      placement: {
        from: from,
        align: align
      },
      template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">short_text</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
  }

}

@Component({
  selector: 'schedule-loader-dialog',
  templateUrl: 'schedule-loader-dialog.html',
})
export class ScheduleLoaderDialog {

  constructor(
    public dialogRef: MatDialogRef<ScheduleLoaderDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
