import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: '[app-btn]',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.app-primary]': 'color === "primary"',
    '[class.app-secondary]': 'color === "secondary"',
    '[class.app-small]': 'size === "sm"',
    '[class.app-medium]': 'size === "m"'
  }
})
export class BtnComponent {
  @Input() color: 'primary' | 'secondary' = 'primary';
  @Input() size: 'sm' | 'm' = 'm';
}
