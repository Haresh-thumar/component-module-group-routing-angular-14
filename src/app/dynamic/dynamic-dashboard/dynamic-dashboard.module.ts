import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicDashboardRoutingModule } from './dynamic-dashboard-routing.module';
import { DynamicItemComponent } from './dynamic-item/dynamic-item.component';
import { DynamicOrderComponent } from './dynamic-order/dynamic-order.component';


@NgModule({
  declarations: [
    DynamicItemComponent,
    DynamicOrderComponent
  ],
  imports: [
    CommonModule,
    DynamicDashboardRoutingModule
  ]
})
export class DynamicDashboardModule { }
