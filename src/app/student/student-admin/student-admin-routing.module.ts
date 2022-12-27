import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDataComponent } from './student-data/student-data.component';
import { StudentUserComponent } from './student-user/student-user.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'student-data', pathMatch: 'full'
  },
  {
    path: 'student-data',
    component: StudentDataComponent,
  },
  {
    path: 'student-user',
    component: StudentUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentAdminRoutingModule { }
