import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { User, DefaultUser } from '../../shared/model';
import { UsersService } from '../../shared/service/users.service';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss']
})
export class UsersViewComponent implements OnInit {
  user: User = new DefaultUser();

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const userId = paramMap.get('userId');
      this.usersService.get(userId).subscribe((user: User) => {
        this.user = user;
      }, (error: Error) => {
        alert(error);
      });
    });
  }

  // private redirect(userId: string): void {
  //   const path = this.viewType === 'edit' ? '../../view/' + userId : '../view/' + userId;
  //   this._router.navigate([path], {
  //     relativeTo: this._activatedRoute,
  //     queryParamsHandling: 'preserve'
  //   });
  // }

}
