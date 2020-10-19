import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';

const routes: Routes = [
  {path: '', redirectTo: '/user-list', pathMatch: 'full'},
  {path: 'user-list', component: UserListComponent},
  {path: 'create-user', component: CreateUserComponent},
  {path: 'remove-user', component: RemoveUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  UserListComponent,
  CreateUserComponent,
  RemoveUserComponent
];