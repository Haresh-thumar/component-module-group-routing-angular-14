import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicComponent } from './dynamic/dynamic.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',redirectTo: 'dynamic-module', pathMatch: 'full'
  },
  {
    path: 'dynamic-module',
    component: DynamicComponent,
    loadChildren: () => import('./dynamic/dynamic.module').then(mod => mod.DynamicModule),
  },
  {
    path: 'employee-module',
    component: EmployeeComponent,
    loadChildren: () => import('./employee/employee.module').then(mod => mod.EmployeeModule),
  },
  {
    path: 'student-module',
    component: StudentComponent,
    loadChildren: () => import('./student/student.module').then(mod => mod.StudentModule),
  },
  {
    path: 'user-module',
    component: UserComponent,
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
