import { UserSignUpComponent } from './presentation/pages/user-signUp/user-signUp.component';
import { HomeUsersComponent } from './presentation/pages/home-users/home-users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: HomeUsersComponent
  },
  {
    path:'cadastrar',
    component: UserSignUpComponent
  },
   {
    path:'editar/:code',
    component: UserSignUpComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
