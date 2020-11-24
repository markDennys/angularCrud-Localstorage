import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() usersLocal: any;
  @Output() sendingItem = new EventEmitter();

  constructor() {}

  clickToDelet(value: any) {
    this.usersLocal.splice(this.usersLocal.indexOf(value), 1);
    localStorage.setItem('user', JSON.stringify(this.usersLocal));
  }

  clickToEdit(value: object) {
    this.sendingItem.emit(this.usersLocal.indexOf(value));
  }
}
