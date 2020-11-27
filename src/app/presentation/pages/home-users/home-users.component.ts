import { UsersInterface } from './../../../core/interfaces/users.interface';
import { UserService } from 'src/app/core/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home-user.component.html',
})
export class HomeUsersComponent implements OnInit {
  users: UsersInterface[] = [];

  constructor(private userSerice: UserService) {}

  ngOnInit(): void {
    this.users = this.userSerice.getUsers();
  }
  deleteUser(user : UsersInterface) {
    this.users.splice(this.users.indexOf(user),1)
    this.userSerice.deleteUser(this.users)
  }
}
