import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDataComponent } from './user-data/user-data.component';
import { UserUserComponent } from './user-user/user-user.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'user-data', pathMatch: 'full'
  },
  {
    path: 'user-data',
    component: UserDataComponent,
  },
  {
    path: 'user-user',
    component: UserUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAdminRoutingModule { }
