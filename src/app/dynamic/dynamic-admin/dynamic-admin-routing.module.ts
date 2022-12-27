import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicDataComponent } from './dynamic-data/dynamic-data.component';
import { DynamicListComponent } from './dynamic-list/dynamic-list.component';
import { DynamicUserComponent } from './dynamic-user/dynamic-user.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'dynamic-data', pathMatch: 'full'
  },
  {
    path: 'dynamic-data',
    component: DynamicDataComponent,
  },
  {
    path: 'dynamic-list',
    component: DynamicListComponent,
  },
  {
    path: 'dynamic-user',
    component: DynamicUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicAdminRoutingModule { }
