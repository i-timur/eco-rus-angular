import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserAuthDto} from '../dtos/userAuthDto';
import {Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  get isAuthenticated(): boolean {
    return !!this.token;
  }

  get token() {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      this.logout();
    }
  }

  login(user: UserAuthDto): Observable<any> {
    return this.http.post(
      'https://ecoapp.cloud.technokratos.com/eco-rus/api/v1/login',
      user
    )
      .pipe(tap((resp: any) => this.setToken(resp.token)));
  }

  logout() {
    localStorage.removeItem('token');
  }
}
