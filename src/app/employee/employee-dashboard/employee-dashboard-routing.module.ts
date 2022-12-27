import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeedItemComponent } from './employeed-item/employeed-item.component';
import { EmployeedOrderComponent } from './employeed-order/employeed-order.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'employee-item', pathMatch: 'full'
  },
  {
    path: 'employee-item',
    component: EmployeedItemComponent,
  },
  {
    path: 'employee-order',
    component: EmployeedOrderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDashboardRoutingModule { }
