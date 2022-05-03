import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DialogRef} from '@angular/cdk-experimental/dialog';
import {UserAuthDto} from '../../../dtos/userAuthDto';
import {AuthService} from '@services/auth.service';
import {DialogService} from '@services/dialog.service';
import {SignUpDialogComponent} from '@components/modals/sign-up-dialog/sign-up-dialog.component';
import {SignInWithPhoneComponent} from '@components/modals/sign-in-with-phone/sign-in-with-phone.component';
import {
  SignInForPartnersDialogComponent
} from '@components/modals/sign-in-for-partners-dialog/sign-in-for-partners-dialog.component';

@Component({
  selector: 'app-sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInDialogComponent {

  form: FormGroup;
  submitted = false;
  isUserIncorrect = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: DialogRef<SignInDialogComponent>,
    private auth: AuthService,
    private dialogService: DialogService
  ) {
    this.form = fb.group({
      phoneNumber: fb.control(null, Validators.required),
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

    const user: UserAuthDto = {
      login: this.form.value.phoneNumber,
      password: this.form.value.password
    };

    this.auth.login(user).subscribe(() => {
      this.submitted = false;
      this.close();
    }, () => {
      this.submitted = false;
    });
  }

  openSignUpDialog() {
    this.close();
    this.dialogService.openDialog(SignUpDialogComponent);
  }

  openSignInWithPhoneDialog() {
    this.close();
    this.dialogService.openDialog(SignInWithPhoneComponent);
  }

  openSignInForPartnersDialog() {
    this.close();
    this.dialogService.openDialog(SignInForPartnersDialogComponent);
  }
}
