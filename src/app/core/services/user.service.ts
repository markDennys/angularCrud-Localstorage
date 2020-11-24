import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  constructor() {}

  public saveUser(valor: any) {
    if (localStorage.getItem('user') === null) {
      localStorage.setItem('user', JSON.stringify([valor]));
    } else {
      let local = JSON.parse(localStorage.getItem('user') || '[]');
      local.push(valor);
      localStorage.setItem('user', JSON.stringify(local));
    }
  }

  public getUsers() {
    return JSON.parse(localStorage.getItem('user') || '[]');
  }
}
