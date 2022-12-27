import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTitleRoutingModule } from './user-title-routing.module';
import { UserTitleComponent } from './user-title.component';


@NgModule({
  declarations: [
    UserTitleComponent
  ],
  imports: [
    CommonModule,
    UserTitleRoutingModule
  ]
})
export class UserTitleModule { }
