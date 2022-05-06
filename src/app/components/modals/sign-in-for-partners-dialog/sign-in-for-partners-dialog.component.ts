import { Component, ChangeDetectionStrategy } from '@angular/core';
import {DialogRef} from '@angular/cdk-experimental/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DialogService} from '@services/dialog.service';
import {SignInWithPhoneComponent} from '@components/modals/sign-in-with-phone/sign-in-with-phone.component';
import {SignUpDialogComponent} from '@components/modals/sign-up-dialog/sign-up-dialog.component';

@Component({
  selector: 'app-sign-in-for-partners-dialog',
  templateUrl: './sign-in-for-partners-dialog.component.html',
  styleUrls: ['./sign-in-for-partners-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInForPartnersDialogComponent {

  form: FormGroup;

  constructor(
    private dialogRef: DialogRef<SignInForPartnersDialogComponent>,
    private fb: FormBuilder,
    private dialogService: DialogService
  ) {
    this.form = fb.group({
      email: fb.control(null, [Validators.required, Validators.email]),
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

    this.close();
  }

  openSignInWithPhoneDialog() {
    this.close();
    this.dialogService.openDialog(SignInWithPhoneComponent);
  }

  openSignUpDialog() {
    this.close();
    this.dialogService.openDialog(SignUpDialogComponent);
  }
}
