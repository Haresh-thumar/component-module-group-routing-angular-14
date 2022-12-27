import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentAdminComponent } from './student-admin/student-admin.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentTagComponent } from './student-tag/student-tag.component';
import { StudentComponent } from './student.component';


@NgModule({
  declarations: [
    StudentComponent,
    StudentAdminComponent,
    StudentDashboardComponent,
    StudentTagComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
