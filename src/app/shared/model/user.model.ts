import { Gender } from './gender.enum';

export interface User {
  userId: string;
  userName: string;
  email: string;
  mobilePhone: string;
  gender: string;
  birthday: Date;
  getAge(): number;
}

export class DefaultUser implements User {
  userId: string;
  userName: string;
  email: string;
  mobilePhone: string;
  gender: string;
  birthday: Date;
  getAge = () => {
    const birthday = this.birthday,
      today = new Date();

    let age = today.getFullYear() - birthday.getFullYear();
    if (today.getMonth() + 1 < birthday.getMonth()
      || (today.getMonth() + 1 === birthday.getMonth()
      && today.getDate() < birthday.getDate())) {
      age = age - 1;
    }
    return age;
  }
  constructor({
    userId = 'user',
    userName = '使用者',
    email = null,
    mobilePhone = null,
    gender = Gender[0],
    birthday = new Date()
  } = {}) {
    this.userId = userId;
    this.userName = userName;
    this.email = email;
    this.mobilePhone = mobilePhone;
    this.gender = gender;
    this.birthday = birthday;
  }
}

export interface Users {
  content: Array<User>;
  totalElements: number;
}

