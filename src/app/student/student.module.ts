import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentAdminComponent } from './student-admin/student-admin.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentTagComponent } from './student-tag/student-tag.component';
import { StudentAdminstudentDataComponent } from './student-adminstudent-data/student-adminstudent-data.component';


@NgModule({
  declarations: [
    StudentAdminComponent,
    StudentDashboardComponent,
    StudentTagComponent,
    StudentAdminstudentDataComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
