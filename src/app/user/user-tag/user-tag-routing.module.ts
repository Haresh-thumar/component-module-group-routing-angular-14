import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UserLeaveComponent } from './user-leave/user-leave.component';
import { UserWorkComponent } from './user-work/user-work.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'user-add', pathMatch: 'full'
  },
  {
    path: 'user-add',
    component: UserAddComponent,
  },
  {
    path: 'user-leave',
    component: UserLeaveComponent,
  },
  {
    path: 'user-work',
    component: UserWorkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserTagRoutingModule { }
