import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {HistoryItem} from '@components/user-history/user-history.component';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryItemComponent {
  @Input() item?: HistoryItem;
}
