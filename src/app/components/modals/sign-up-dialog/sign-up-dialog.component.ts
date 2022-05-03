import { Component, ChangeDetectionStrategy } from '@angular/core';
import {DialogRef} from '@angular/cdk-experimental/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DialogService} from '@services/dialog.service';
import {SignInDialogComponent} from '@components/modals/sign-in-dialog/sign-in-dialog.component';
import {UserSignUpDto} from '../../../dtos/userSignUpDto';
import {UserService} from '@services/user.service';
import {
  SignInForPartnersDialogComponent
} from '@components/modals/sign-in-for-partners-dialog/sign-in-for-partners-dialog.component';

@Component({
  selector: 'app-sign-up-dialog',
  templateUrl: './sign-up-dialog.component.html',
  styleUrls: ['./sign-up-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpDialogComponent {

  form: FormGroup;
  submitted = false;
  isLoginAlreadyUsed: boolean = false;

  constructor(
    private dialogRef: DialogRef<SignUpDialogComponent>,
    private fb: FormBuilder,
    private dialogService: DialogService,
    private userService: UserService
  ) {
    this.form = fb.group({
      name: fb.control(null, Validators.required),
      login: fb.control(null, Validators.required),
      password: fb.control(null, Validators.required)
    });
  }

  close() {
    this.dialogRef.close();
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const user: UserSignUpDto = {
      name: this.form.value.name,
      phoneNumber: this.form.value.login,
      password: this.form.value.password
    };

    this.userService.signUp(user).subscribe(() => {
      this.submitted = false;
      this.close();
      this.openSignInDialog();
    }, () => {
      this.submitted = false;
    });
  }

  openSignInDialog() {
    this.close();
    this.dialogService.openDialog(SignInDialogComponent);
  }

  openSignInForPartnersDialog() {
    this.close();
    this.dialogService.openDialog(SignInForPartnersDialogComponent);
  }
}
