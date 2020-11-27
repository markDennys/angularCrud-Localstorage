import { UsersInterface } from './../../../core/interfaces/users.interface';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  templateUrl: './user-signUp.component.html',
})
export class UserSignUpComponent implements OnInit {
  user: UsersInterface = {
    code: 0,
    name: '',
    nickname: '',
    email: '',
    stack: '',
  };

  urlCodeUser: any = this.activatedRoute.snapshot.paramMap.get('code');

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let local = window.location.href;
    if (!local.endsWith('cadastrar')) {
      this.user = this.userService.getUsersByCode(+this.urlCodeUser);
    } else {
      console.log(local);
    }
  }

  signUp(formCadastro: NgForm): void {
    formCadastro.invalid
      ? formCadastro.control.markAllAsTouched()
      : ((this.user.code = Math.floor(Math.random() * 900000)),
        this.userService.saveUser(this.user),
        this.router.navigate(['']) );
  }

  editUser(formCadastro: NgForm): void {
    formCadastro.invalid
      ? formCadastro.control.markAllAsTouched()
      : this.userService.editUser(this.user), this.router.navigate(['']) ;
  }
}
