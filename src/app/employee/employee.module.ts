import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeAdminComponent } from './employee-admin/employee-admin.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeTagComponent } from './employee-tag/employee-tag.component';
import { EmployeeDashboardItemComponent } from './employee-dashboard-item/employee-dashboard-item.component';
import { EmployeedItemComponent } from './employee-dashboar/employeed-item/employeed-item.component';


@NgModule({
  declarations: [
    EmployeeAdminComponent,
    EmployeeDashboardComponent,
    EmployeeTagComponent,
    EmployeeDashboardItemComponent,
    EmployeedItemComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
