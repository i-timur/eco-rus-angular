import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {DialogRef} from '@angular/cdk-experimental/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DialogService} from '@services/dialog.service';
import {SignInDialogComponent} from '@components/modals/sign-in-dialog/sign-in-dialog.component';
import {EnterCodeDialogComponent} from '@components/modals/enter-code-dialog/enter-code-dialog.component';
import {
  SignInForPartnersDialogComponent
} from '@components/modals/sign-in-for-partners-dialog/sign-in-for-partners-dialog.component';

@Component({
  selector: 'app-sign-in-with-phone',
  templateUrl: './sign-in-with-phone.component.html',
  styleUrls: ['./sign-in-with-phone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInWithPhoneComponent {

  form: FormGroup;

  constructor(
    private dialogRef: DialogRef<SignInWithPhoneComponent>,
    private fb: FormBuilder,
    private dialogService: DialogService
    ) {
    this.form = fb.group({phoneNumber: fb.control(null, Validators.required)});
  }

  close() {
    this.dialogRef.close();
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.close();
    this.dialogService.openDialog(EnterCodeDialogComponent);
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
