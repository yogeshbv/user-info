import { Component, OnInit, Input } from '@angular/core';

import { USERS } from '../data-users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users = USERS;



 

  constructor() { }
  @Input('title') pageTitle: string;
  // @Input() title: string;

  ngOnInit(): void {
    // console.log(this.title);
  }

}
