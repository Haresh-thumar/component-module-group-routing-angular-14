import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeereMoveComponent } from './employeere-move/employeere-move.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'employee-add', pathMatch: 'full'
  },
  {
    path: 'employee-add',
    component: EmployeeAddComponent,
  },
  {
    path: 'employee-move',
    component: EmployeereMoveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeTagRoutingModule { }
