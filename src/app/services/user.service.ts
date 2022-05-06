import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserSignUpDto} from '../dto/userSignUpDto';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {UserDto} from '../dto/userDto';
import {AuthService} from '@services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {

  isAuthed?: boolean;

  isAuthedSub?: Subscription;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
    this.init();
  }

  init(): void {
    this.isAuthedSub = this.auth.isAuthed$.subscribe((isAuthed) => {
      this.isAuthed = isAuthed;
    });
  }

  ngOnDestroy(): void {
    this.isAuthedSub?.unsubscribe();
  }

  signUp(user: UserSignUpDto): Observable<any> {
    return this.http.post(
      'account',
      user
    )
  }

  getUser(): Observable<UserDto> | null {
    if (this.isAuthed) {
      return this.http.get<UserDto>('profile');
    }
    return null;
  }
}
