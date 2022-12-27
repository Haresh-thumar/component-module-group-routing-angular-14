import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserItemComponent } from './user-item/user-item.component';
import { UserOrderComponent } from './user-order/user-order.component';
import { UserTrackComponent } from './user-track/user-track.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'user-item', pathMatch: 'full'
  },
  {
    path: 'user-item',
    component: UserItemComponent,
  },
  {
    path: 'user-order',
    component: UserOrderComponent,
  },
  {
    path: 'user-track',
    component: UserTrackComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
