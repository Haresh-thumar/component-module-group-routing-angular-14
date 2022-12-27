import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentRejoinComponent } from './student-rejoin/student-rejoin.component';
import { StudentRemoveComponent } from './student-remove/student-remove.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'student-add', pathMatch: 'full'
  },
  {
    path: 'student-add',
    component: StudentAddComponent,
  },
  {
    path: 'student-rejoin',
    component: StudentRejoinComponent,
  },
  {
    path: 'student-remove',
    component: StudentRemoveComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentTagRoutingModule { }
