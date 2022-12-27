import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeTagRoutingModule } from './employee-tag-routing.module';
import { EmployeeTagComponent } from './employee-tag.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeereMoveComponent } from './employeere-move/employeere-move.component';


@NgModule({
  declarations: [
    EmployeeTagComponent,
    EmployeeAddComponent,
    EmployeereMoveComponent
  ],
  imports: [
    CommonModule,
    EmployeeTagRoutingModule
  ]
})
export class EmployeeTagModule { }
