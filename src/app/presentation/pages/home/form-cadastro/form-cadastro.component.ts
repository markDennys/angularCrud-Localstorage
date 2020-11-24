import { UserService } from './../../../../core/services/user.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css'],
})
export class FormCadastroComponent {
  users: object[] = [];

  user: any = {
    name: '',
    quote: '',
  };
  editIndex: any = undefined;

  constructor(private userService: UserService) {
    this.getUserFromService();
  }

  getUserFromService() {
    this.users = this.userService.getUsers();
  }

  signUp(formSignUp: NgForm) {
    formSignUp.invalid
      ? formSignUp.control.markAllAsTouched()
      : (this.userService.saveUser(this.user),
        formSignUp.control.reset(),
        this.getUserFromService());
  }

  toEdit(event: number) {
    this.user = this.users[event];
    this.editIndex = event;
  }

  editUser(formSignUp: NgForm) {
    formSignUp.invalid
      ? formSignUp.control.markAllAsTouched()
      : (localStorage.setItem('user', JSON.stringify(this.users)),
        formSignUp.control.reset(),
        this.getUserFromService(),
        (this.editIndex = undefined));
  }
}
