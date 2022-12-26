import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicAdminRoutingModule } from './dynamic-admin-routing.module';
import { DynamicUserComponent } from './dynamic-user/dynamic-user.component';
import { DynamicDataComponent } from './dynamic-data/dynamic-data.component';
import { DynamiclistComponent } from './dynamiclist/dynamiclist.component';
import { DynamicListComponent } from './dynamic-list/dynamic-list.component';


@NgModule({
  declarations: [
    DynamicUserComponent,
    DynamicDataComponent,
    DynamiclistComponent,
    DynamicListComponent
  ],
  imports: [
    CommonModule,
    DynamicAdminRoutingModule
  ]
})
export class DynamicAdminModule { }
