import {Component, ChangeDetectionStrategy, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import {AuthService} from '@services/auth.service';
import {DialogService} from '@services/dialog.service';
import {SignInDialogComponent} from '@components/modals/sign-in-dialog/sign-in-dialog.component';
import {Subscription} from 'rxjs';
import {UserDto} from '../../dto/userDto';
import {UserService} from '@services/user.service';
import {NavbarMobileDialogComponent} from '@components/modals/navbar-mobile-dialog/navbar-mobile-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit, OnDestroy {

  isAuthed?: boolean;
  user?: UserDto;

  isAuthedSub?: Subscription;
  userSub?: Subscription;

  constructor(
    public authService: AuthService,
    private dialogService: DialogService,
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.isAuthedSub = this.authService.isAuthed$.subscribe((isAuthed) => {
      this.isAuthed = isAuthed;
      this.cdr.markForCheck();
      this.userSub = this.userService.getUser()?.subscribe((user) => {
        this.user = user;
        this.cdr.markForCheck();
      });
    });
  }

  ngOnDestroy(): void {
    this.isAuthedSub?.unsubscribe();
    this.userSub?.unsubscribe();
  }

  openSignInDialog() {
    this.dialogService.openDialog(SignInDialogComponent);
  }

  openMobileNavbarDialog(): void {
    this.dialogService.openDialog(NavbarMobileDialogComponent, {panelClass: ['side-bar']});
  }
}
