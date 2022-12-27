import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAdminComponent } from './employee-admin/employee-admin.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeTagComponent } from './employee-tag/employee-tag.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'employee-admin', pathMatch: 'full'
  },
  {
    path: 'employee-admin',
    component: EmployeeAdminComponent,
    loadChildren: () => import('./employee-admin/employee-admin.module').then(mod => mod.EmployeeAdminModule),
  },
  {
    path: 'employee-dashboard',
    component: EmployeeDashboardComponent,
    loadChildren: () => import('./employee-dashboard/employee-dashboard.module').then(mod => mod.EmployeeDashboardModule),
  },
  {
    path: 'employee-tag',
    component: EmployeeTagComponent,
    loadChildren: () => import('./employee-tag/employee-tag.module').then(mod => mod.EmployeeTagModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
