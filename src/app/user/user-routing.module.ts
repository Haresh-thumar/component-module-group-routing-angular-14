import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserTagComponent } from './user-tag/user-tag.component';
import { UserTitleComponent } from './user-title/user-title.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'user-admin', pathMatch: 'full'
  },
  {
    path: 'user-admin',
    component: UserAdminComponent,
    loadChildren: () => import('./user-admin/user-admin.module').then(mod => mod.UserAdminModule),
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    loadChildren: () => import('./user-dashboard/user-dashboard.module').then(mod => mod.UserDashboardModule),
  },
  {
    path: 'user-tag',
    component: UserTagComponent,
    loadChildren: () => import('./user-tag/user-tag.module').then(mod => mod.UserTagModule),
  },
  {
    path: 'user-title',
    component: UserTitleComponent,
    loadChildren: () => import('./user-title/user-title.module').then(mod => mod.UserTitleModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
