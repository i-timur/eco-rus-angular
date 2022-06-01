import {Component, ChangeDetectionStrategy, Optional} from '@angular/core';
import {DialogRef} from '@angular/cdk-experimental/dialog';

@Component({
  selector: 'app-map-card-details',
  templateUrl: './map-card-details.component.html',
  styleUrls: ['./map-card-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapCardDetailsComponent {
  constructor(@Optional() private dialogRef: DialogRef<MapCardDetailsComponent>) {
  }

  close() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
