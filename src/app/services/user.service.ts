import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserSignUpDto} from '../dtos/userSignUpDto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  signUp(user: UserSignUpDto): Observable<any> {
    return this.http.post(
      'https://ecoapp.cloud.technokratos.com/eco-rus/api/v1/account',
      user
    )
  }
}
