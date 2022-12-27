import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentItemComponent } from './student-item/student-item.component';
import { StudentOrderComponent } from './student-order/student-order.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'student-item', pathMatch: 'full'
  },
  {
    path: 'student-item',
    component: StudentItemComponent,
  },
  {
    path: 'student-order',
    component: StudentOrderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentDashboardRoutingModule { }
