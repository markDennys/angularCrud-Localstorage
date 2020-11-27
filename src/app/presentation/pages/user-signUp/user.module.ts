import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserSignUpComponent } from './user-signUp.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [UserSignUpComponent],
  imports: [FormsModule, CommonModule, RouterModule],
  exports: [UserSignUpComponent],
})
export class UserModule {}
