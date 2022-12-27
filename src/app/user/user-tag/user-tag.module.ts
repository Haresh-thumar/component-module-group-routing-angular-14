import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTagRoutingModule } from './user-tag-routing.module';
import { UserTagComponent } from './user-tag.component';


@NgModule({
  declarations: [
    UserTagComponent
  ],
  imports: [
    CommonModule,
    UserTagRoutingModule
  ]
})
export class UserTagModule { }
