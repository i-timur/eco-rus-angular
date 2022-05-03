import { Component, ChangeDetectionStrategy } from '@angular/core';
import {AuthService} from '@services/auth.service';
import {DialogService} from '@services/dialog.service';
import {SignInDialogComponent} from '@components/modals/sign-in-dialog/sign-in-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  userName = 'Алексей'
  balance = 1000;
  userId = 1;

  constructor(
    public authService: AuthService,
    private dialogService: DialogService
  ) { }

  openSignInDialog() {
    this.dialogService.openDialog(SignInDialogComponent)
  }
}
