import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentDashboardRoutingModule } from './student-dashboard-routing.module';
import { StudentItemComponent } from './student-item/student-item.component';
import { StudentOrderComponent } from './student-order/student-order.component';


@NgModule({
  declarations: [
    StudentItemComponent,
    StudentOrderComponent
  ],
  imports: [
    CommonModule,
    StudentDashboardRoutingModule
  ]
})
export class StudentDashboardModule { }
