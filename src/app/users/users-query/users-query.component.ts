import { Component, OnInit } from '@angular/core';
import { tap, flatMap } from 'rxjs/operators';

import { Users } from '../../shared/model';
import { UsersService } from '../../shared/service/users.service';

@Component({
  selector: 'app-users-query',
  templateUrl: './users-query.component.html',
  styleUrls: ['./users-query.component.scss']
})
export class UsersQueryComponent implements OnInit {
  users: Users;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.query().subscribe((users: Users) => {
      this.users = users;
    });
  }

  deleteUser(userId: string) {
    this.usersService.delete([userId]).pipe(
      flatMap(() => this.usersService.query().pipe(
        tap((users: Users) => this.users = users)
      ))
    ).subscribe();
  }

}
