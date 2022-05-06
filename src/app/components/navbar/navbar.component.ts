import {Component, ChangeDetectionStrategy, OnInit, OnDestroy} from '@angular/core';
import {AuthService} from '@services/auth.service';
import {DialogService} from '@services/dialog.service';
import {SignInDialogComponent} from '@components/modals/sign-in-dialog/sign-in-dialog.component';
import {Observable, Subscription} from 'rxjs';
import {UserDto} from '../../dto/userDto';
import {UserService} from '@services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit, OnDestroy {

  isAuthed$!: Observable<boolean>;

  user!: UserDto;
  userSub!: Subscription;

  constructor(
    public authService: AuthService,
    private dialogService: DialogService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.isAuthed$ = this.authService.isAuthed$;
    this.userSub = this.userService.getUser().subscribe((user) => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  openSignInDialog() {
    this.dialogService.openDialog(SignInDialogComponent)
  }
}
