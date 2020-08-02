import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Route Components
import { SchedulerComponent } from './layouts/scheduler/scheduler.component';


const routes: Routes = [
  { path: '', component: SchedulerComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
