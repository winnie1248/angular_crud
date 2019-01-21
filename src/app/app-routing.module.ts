import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersQueryComponent } from './users/users-query/users-query.component';
import { UsersEditComponent } from './users/users-edit/users-edit.component';
import { UsersViewComponent } from './users/users-view/users-view.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'users',
  pathMatch: 'full',
}, {
  path: 'users',
  children: [{
    path: '',
    redirectTo: 'query',
    pathMatch: 'full',
  }, {
    path: 'query',
    component: UsersQueryComponent
  }, {
    path: 'create',
    component: UsersEditComponent
  }, {
    path: 'edit/:userId',
    component: UsersEditComponent
  }, {
    path: 'view/:userId',
    component: UsersViewComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
