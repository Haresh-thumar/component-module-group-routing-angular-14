import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeAdminRoutingModule } from './employee-admin-routing.module';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { EmployeeUserComponent } from './employee-user/employee-user.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


@NgModule({
  declarations: [
    EmployeeDataComponent,
    EmployeeUserComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    EmployeeAdminRoutingModule
  ]
})
export class EmployeeAdminModule { }
