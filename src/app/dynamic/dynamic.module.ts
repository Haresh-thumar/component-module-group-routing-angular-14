import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingModule } from './dynamic-routing.module';
import { DynamicDashboardComponent } from './dynamic-dashboard/dynamic-dashboard.component';
import { DynamicAdminComponent } from './dynamic-admin/dynamic-admin.component';
import { DynamicUserComponent } from './dynamicAdmin/dynamic-user/dynamic-user.component';


@NgModule({
  declarations: [
    DynamicDashboardComponent,
    DynamicAdminComponent,
    DynamicUserComponent
  ],
  imports: [
    CommonModule,
    DynamicRoutingModule
  ]
})
export class DynamicModule { }
