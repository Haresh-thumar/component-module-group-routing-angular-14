import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAdminRoutingModule } from './user-admin-routing.module';
import { UserAdminComponent } from './user-admin.component';


@NgModule({
  declarations: [
    UserAdminComponent
  ],
  imports: [
    CommonModule,
    UserAdminRoutingModule
  ]
})
export class UserAdminModule { }
