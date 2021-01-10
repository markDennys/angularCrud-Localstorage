import { ActivatedRoute } from '@angular/router';
import { UsersInterface } from './../../../core/interfaces/users.interface';
import { UserService } from 'src/app/core/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home-user.component.html',
})
export class HomeUsersComponent implements OnInit {
  users: UsersInterface[] = [];

  userFilter = {
    code: '',
    name: '',
    status: ''
  }

  constructor(private userSerice: UserService, private s: ActivatedRoute) { }

  ngOnInit(): void {
    this.users = this.userSerice.getUsers();
    console.log(this.users)
  }

  deletar(user: UsersInterface) {
    this.users.splice(this.users.indexOf(user), 1)
    this.userSerice.deleteUser(this.users)
  }



  filter() {
    this.users = this.userSerice.getUsers();


    if (this.userFilter.code != "") {
      this.users = this.users.filter(data => data.code == this.userFilter.code)
    }
    if (this.userFilter.name != "") {
      this.users = this.users.filter(data => data.name == this.userFilter.name)
    }
    if (this.userFilter.status != "") {
      this.users = this.users.filter(data => data.status == this.userFilter.status)
    }

  }

}
