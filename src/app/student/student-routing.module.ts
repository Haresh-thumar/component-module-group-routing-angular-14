import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAdminComponent } from './student-admin/student-admin.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentTagComponent } from './student-tag/student-tag.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'student-admin', pathMatch: 'full'
  },
  {
    path: 'student-admin',
    component: StudentAdminComponent,
    loadChildren: () => import('./student-admin/student-admin.module').then(mod => mod.StudentAdminModule),
  },
  {
    path: 'student-dashboard',
    component: StudentDashboardComponent,
    loadChildren: () => import('./student-dashboard/student-dashboard.module').then(mod => mod.StudentDashboardModule),
  },
  {
    path: 'student-tag',
    component: StudentTagComponent,
    loadChildren: () => import('./student-tag/student-tag.module').then(mod => mod.StudentTagModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
