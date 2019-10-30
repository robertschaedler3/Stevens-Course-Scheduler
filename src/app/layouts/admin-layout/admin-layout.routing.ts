import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { SavedSchedulesComponent } from 'app/saved-schedules/saved-schedules.component';
import { StudyplanComponent } from 'app/studyplan/studyplan.component';
import { CanvasComponent } from 'app/canvas/canvas.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'saved', component: SavedSchedulesComponent },
    { path: 'study-plan', component: StudyplanComponent },
    { path: 'connect', component: CanvasComponent },
];
