import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeUsersComponent } from './home-users.component';

@NgModule({
  declarations: [HomeUsersComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomeUsersComponent],
})
export class HomeUserModule {}
