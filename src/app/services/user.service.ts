import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserSignUpDto} from '../dto/userSignUpDto';
import {map, Observable} from 'rxjs';
import {UserDto} from '../dto/userDto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  signUp(user: UserSignUpDto): Observable<any> {
    return this.http.post(
      'account',
      user
    )
  }

  getUser(): Observable<UserDto> {
    return this.http.get<UserDto>('profile');
  }
}
