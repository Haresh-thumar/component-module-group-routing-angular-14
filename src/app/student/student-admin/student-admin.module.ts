import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentAdminRoutingModule } from './student-admin-routing.module';
import { StudentDataComponent } from './student-data/student-data.component';
import { StudentUserComponent } from './student-user/student-user.component';


@NgModule({
  declarations: [
    StudentDataComponent,
    StudentUserComponent
  ],
  imports: [
    CommonModule,
    StudentAdminRoutingModule
  ]
})
export class StudentAdminModule { }
