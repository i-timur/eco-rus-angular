import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {DialogRef} from '@angular/cdk-experimental/dialog';

@Component({
  selector: 'app-qr-code-dialog',
  templateUrl: './qr-code-dialog.component.html',
  styleUrls: ['./qr-code-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QrCodeDialogComponent {

  constructor(private dialogRef: DialogRef<QrCodeDialogComponent>) { }

  close() {
    this.dialogRef.close();
  }
}
