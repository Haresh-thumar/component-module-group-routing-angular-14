import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicAdminComponent } from './dynamic-admin/dynamic-admin.component';
import { DynamicDashboardComponent } from './dynamic-dashboard/dynamic-dashboard.component';
import { DynamicComponent } from './dynamic.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'dynamic-admin', pathMatch: 'full'
  },
  {
    path: 'dynamic-admin',
    component: DynamicAdminComponent,
    loadChildren: () => import('./dynamic-admin/dynamic-admin.module').then(mod => mod.DynamicAdminModule),
  },
  {
    path: 'dynamic-dashboard',
    component: DynamicDashboardComponent,
    loadChildren: () => import('./dynamic-dashboard/dynamic-dashboard.module').then(mod => mod.DynamicDashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicRoutingModule { }
