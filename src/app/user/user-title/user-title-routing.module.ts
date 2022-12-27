import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCancelComponent } from './user-cancel/user-cancel.component';
import { UserFirstComponent } from './user-first/user-first.component';
import { UserLastComponent } from './user-last/user-last.component';
import { UserMiddleComponent } from './user-middle/user-middle.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'user-cancel', pathMatch: 'full'
  },
  {
    path: 'user-cancel',
    component: UserCancelComponent,
  },
  {
    path: 'user-first',
    component: UserFirstComponent,
  },
  {
    path: 'user-last',
    component: UserLastComponent,
  },
  {
    path: 'user-middle',
    component: UserMiddleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserTitleRoutingModule { }
