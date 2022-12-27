import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeAdminComponent } from './employee-admin/employee-admin.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeComponent } from './employee.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeAdminComponent,
    EmployeeDashboardComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
