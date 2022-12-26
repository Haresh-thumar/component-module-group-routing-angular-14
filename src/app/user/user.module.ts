import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserTagComponent } from './user-tag/user-tag.component';
import { UserTitleComponent } from './user-title/user-title.component';
import { UserDataComponent } from './user-admin/user-data/user-data.component';
import { UserUserComponent } from './user-admin/user-user/user-user.component';
import { UserItemComponent } from './user-dashboard/user-item/user-item.component';
import { UserOrderComponent } from './user-dashboard/user-order/user-order.component';
import { UserTrackComponent } from './user-dashboard/user-track/user-track.component';
import { UserAddComponent } from './user-tag/user-add/user-add.component';
import { UserWorkComponent } from './user-tag/user-work/user-work.component';
import { UserLeaveComponent } from './user-tag/user-leave/user-leave.component';
import { UserFirstComponent } from './user-title/user-first/user-first.component';
import { UserMiddleComponent } from './user-title/user-middle/user-middle.component';
import { UserLastComponent } from './user-title/user-last/user-last.component';
import { UserCancelComponent } from './user-title/user-cancel/user-cancel.component';


@NgModule({
  declarations: [
    UserAdminComponent,
    UserDashboardComponent,
    UserTagComponent,
    UserTitleComponent,
    UserDataComponent,
    UserUserComponent,
    UserItemComponent,
    UserOrderComponent,
    UserTrackComponent,
    UserAddComponent,
    UserWorkComponent,
    UserLeaveComponent,
    UserFirstComponent,
    UserMiddleComponent,
    UserLastComponent,
    UserCancelComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
