import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentTagRoutingModule } from './student-tag-routing.module';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentRemoveComponent } from './student-remove/student-remove.component';
import { StudentRejoinComponent } from './student-rejoin/student-rejoin.component';


@NgModule({
  declarations: [
    StudentAddComponent,
    StudentRemoveComponent,
    StudentRejoinComponent
  ],
  imports: [
    CommonModule,
    StudentTagRoutingModule
  ]
})
export class StudentTagModule { }
