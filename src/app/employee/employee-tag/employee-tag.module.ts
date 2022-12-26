import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeTagRoutingModule } from './employee-tag-routing.module';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeremoveComponent } from './employeeremove/employeeremove.component';
import { EmployeereMoveComponent } from './employeere-move/employeere-move.component';


@NgModule({
  declarations: [
    EmployeeAddComponent,
    EmployeeremoveComponent,
    EmployeereMoveComponent
  ],
  imports: [
    CommonModule,
    EmployeeTagRoutingModule
  ]
})
export class EmployeeTagModule { }
