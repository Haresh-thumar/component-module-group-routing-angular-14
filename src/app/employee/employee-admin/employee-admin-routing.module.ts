import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeUserComponent } from './employee-user/employee-user.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'employee-data', pathMatch: 'full'
  },
  {
    path: 'employee-data',
    component: EmployeeDataComponent,
  },
  {
    path: 'employee-list',
    component: EmployeeListComponent,
  },
  {
    path: 'employee-user',
    component: EmployeeUserComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeAdminRoutingModule { }
