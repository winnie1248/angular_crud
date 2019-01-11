import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { User, DefaultUser, Gender } from '../../shared/model';
import { UsersService } from '../../shared/service/users.service';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {
  user: User;
  formGroup: FormGroup;
  genders = Object.keys(Gender).filter((key: string) => typeof Gender[key as any] === 'number');
  viewType: 'edit' | 'create';

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.viewType = this._router.url.split('/').indexOf('edit') > -1 ? 'edit' : 'create';
    this.formGroup = this.formInit();

    this._activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (this.viewType === 'edit') {
        const userId = paramMap.get('userId');
        this.usersService.get(userId).subscribe((user: User) => {
          this.user = user;
        }, (error: Error) => {
          alert(error);
        });
      } else {
        this.user = new DefaultUser();
      }

      this.formGroup.patchValue(this.user);
      if (this.user.birthday) {
        this.formGroup.patchValue({
          birthday: this.user.birthday.toJSON().slice(0, 10)
        });
      }
    });
  }

  formInit(): FormGroup {
    const setting = {
      userId: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      email: ['', [Validators.email]],
      mobilePhone: ['', [Validators.minLength(10), Validators.maxLength(10)]],
      gender: ['', [Validators.required]],
      birthday: [null, [Validators.required]]
    };
    return this._formBuilder.group(setting);
  }

  getErrors(field: string): ValidationErrors {
    return this.formGroup.get(field).errors;
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      const userInfo = Object.assign(this.user, this.formGroup.value);
      this.user.birthday = new Date(this.user.birthday);
      if (this.viewType === 'edit') {
        this.usersService.modify(userInfo).subscribe((user: User) => {
          this.redirect(user.userId);
        }, (error: Error) => {
          alert(error);
        });
      } else {
        this.usersService.create(userInfo).subscribe((user: User) => {
          this.redirect(user.userId);
        }, (error: Error) => {
          alert(error);
        });
      }
    }
  }

  private redirect(userId: string): void {
    const path = this.viewType === 'edit' ? '../../view/' + userId : '../view/' + userId;
    this._router.navigate([path], {
      relativeTo: this._activatedRoute,
      queryParamsHandling: 'preserve'
    });
  }

}
