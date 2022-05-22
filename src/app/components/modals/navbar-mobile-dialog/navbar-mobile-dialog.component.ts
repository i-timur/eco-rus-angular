import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy} from '@angular/core';
import {DialogRef} from '@angular/cdk-experimental/dialog';
import {AuthService} from '@services/auth.service';
import {Subscription} from 'rxjs';
import {UserService} from '@services/user.service';
import {UserDto} from '../../../dto/userDto';

@Component({
  selector: 'app-navbar-mobile-dialog',
  templateUrl: './navbar-mobile-dialog.component.html',
  styleUrls: ['./navbar-mobile-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarMobileDialogComponent implements OnInit, OnDestroy {

  authSub?: Subscription;

  isAuthed?: boolean;
  user?: UserDto;

  constructor(
    public dialogRef: DialogRef<NavbarMobileDialogComponent>,
    public auth: AuthService,
    private cdr: ChangeDetectorRef,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.authSub = this.auth.isAuthed$.subscribe((isAuthed) => {
      this.isAuthed = isAuthed;
      this.cdr.markForCheck();
    });
    this.userService.getUser()?.subscribe((user) => {
      this.user = user;
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.authSub?.unsubscribe();
  }

  close() {
    this.dialogRef.close();
  }
}
