import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicItemComponent } from './dynamic-item/dynamic-item.component';
import { DynamicOrderComponent } from './dynamic-order/dynamic-order.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'dynamic-item', pathMatch: 'full'
  },
  {
    path: 'dynamic-item',
    component: DynamicItemComponent,
  },
  {
    path: 'dynamic-order',
    component: DynamicOrderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicDashboardRoutingModule { }
