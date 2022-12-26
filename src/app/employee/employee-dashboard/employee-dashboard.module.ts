import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDashboardRoutingModule } from './employee-dashboard-routing.module';
import { EmployeedItemComponent } from './employeed-item/employeed-item.component';
import { EmployeedOrderComponent } from './employeed-order/employeed-order.component';


@NgModule({
  declarations: [
    EmployeedItemComponent,
    EmployeedOrderComponent
  ],
  imports: [
    CommonModule,
    EmployeeDashboardRoutingModule
  ]
})
export class EmployeeDashboardModule { }
