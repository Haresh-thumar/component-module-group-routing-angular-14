import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingModule } from './dynamic-routing.module';
import { DynamicComponent } from './dynamic.component';
import { DynamicAdminModule } from './dynamic-admin/dynamic-admin.module';
import { DynamicDashboardModule } from './dynamic-dashboard/dynamic-dashboard.module';


@NgModule({
  declarations: [
    DynamicComponent,
  ],
  imports: [
    CommonModule,
    DynamicRoutingModule,
    DynamicAdminModule,
    DynamicDashboardModule
  ],
})
export class DynamicModule { }
