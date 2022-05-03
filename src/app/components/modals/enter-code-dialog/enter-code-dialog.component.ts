import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {DialogRef} from '@angular/cdk-experimental/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DialogService} from '@services/dialog.service';
import {
  SignInForPartnersDialogComponent
} from '@components/modals/sign-in-for-partners-dialog/sign-in-for-partners-dialog.component';

@Component({
  selector: 'app-enter-code-dialog',
  templateUrl: './enter-code-dialog.component.html',
  styleUrls: ['./enter-code-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnterCodeDialogComponent {

  form: FormGroup;

  constructor(
    private dialogRef: DialogRef<EnterCodeDialogComponent>,
    private fb: FormBuilder,
    private dialogService: DialogService
  ) {
    this.form = fb.group({code: fb.control(null, Validators.required)});
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

  openSignInForPartnersDialog() {
    this.close();
    this.dialogService.openDialog(SignInForPartnersDialogComponent);
  }
}
