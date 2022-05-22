import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserAuthDto} from '../dto/userAuthDto';
import {BehaviorSubject, Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(!!this.isAuthed);

  readonly isAuthed$ = this._isAuthed.asObservable();

  constructor(private http: HttpClient) { }

  get isAuthed() {
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
      .pipe(tap((resp: any) => {
        this.setToken(resp.token);
        this._isAuthed.next(!!this.isAuthed);
      }));
  }

  logout() {
    localStorage.removeItem('token');
    this._isAuthed.next(!!this.isAuthed);
  }
}
