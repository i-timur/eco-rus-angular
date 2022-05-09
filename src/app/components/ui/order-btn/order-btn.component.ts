import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: '[app-order-btn]',
  templateUrl: './order-btn.component.html',
  styleUrls: ['./order-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.active]': 'isActive'
  }
})
export class OrderBtnComponent {
  @Input() isActive: boolean = false;
}
