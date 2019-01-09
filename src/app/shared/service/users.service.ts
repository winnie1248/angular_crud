import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { User, DefaultUser, Users } from '../model';
import { HttpTransferService } from './http-transfer.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'www.xxx.com';
  userList: Array<User> = [];

  constructor(
    private httpClient: HttpClient,
    private httpTransferService: HttpTransferService
  ) { }

  query(): Observable<Users> {
    // const params = this.httpTransferService.setParams(searchParam);
    // return this.httpClient.get<Users>(this.url + '/users', {params}).pipe(
    //   map((users: Users) => {
    //     users.content = users.content.map((user: User) => new DefaultUser(user));
    //     return users;
    //   })
    // );

    const users = {
      content: this.userList,
      totalElements: this.userList.length
    };
    return of(users);
  }

  get(userId: string): Observable<User> {
    // return this.httpClient.get<User>(this.url + '/users/' + userId).pipe(
    //   map((user: User) => new DefaultUser(user))
    // );

    if (this.hasUser(userId)) {
      const defaultUser = this.userList.filter((user: User) => user.userId === userId)[0];
      return of(defaultUser);
    } else {
      return throwError('User does not exist.');
    }
  }

  create(userInfo: User): Observable<User> {
    // return this.httpClient.post<User>(this.url + '/users', userInfo).pipe(
    //   map((user: User) => new DefaultUser(user))
    // );

    if (!this.hasUser(userInfo.userId)) {
      this.userList.push(userInfo);
      return of(userInfo);
    } else {
      return throwError('User already exists.');
    }
  }

  modify(userInfo: User): Observable<User> {
    // return this.httpClient.put<User>(this.url + '/users/' + userInfo.userId, userInfo).pipe(
    //   map((user: User) => new DefaultUser(user))
    // );

    if (this.hasUser(userInfo.userId)) {
      this.userList = this.userList.map((user: User) => user.userId === userInfo.userId ? Object.assign(user, userInfo) : user);
      return of(userInfo);
    } else {
      return throwError('User does not exist.');
    }
  }

  delete(userIds: Array<string>): void {
    // const params = this.httpTransferService.setParams(userIds);
    // return this.httpClient.delete(this.url + '/users', {params});

    this.userList = this.userList.filter((user: User) => userIds.indexOf(user.userId) === -1);
  }

  private hasUser(userId: string): boolean {
    return this.userList.some((user: User) => user.userId === userId);
  }
}
