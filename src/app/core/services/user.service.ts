import { UsersInterface } from './../interfaces/users.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  local = JSON.parse(localStorage.getItem('users') || '[]');

  constructor() {}

  saveUser(user: UsersInterface): void {
    if (localStorage.getItem('users') === null) {
      localStorage.setItem('users', JSON.stringify([user]));
    } else {
      this.local.push(user);
      localStorage.setItem('users', JSON.stringify(this.local));
    }
  }

  getUsers(): UsersInterface[] {
    return this.local;
  }

  getUsersByCode(code: number): UsersInterface {
    return this.local.find((user: UsersInterface) => user.code === code);
  }

  editUser(user: UsersInterface): void {
    let userEdited = this.local.indexOf(user);
    this.local.splice(userEdited, 1, user);
    localStorage.setItem('users', JSON.stringify(this.local));
  }

  deleteUser(users: UsersInterface[]) {
    localStorage.setItem('users', JSON.stringify(users));
  }
}
