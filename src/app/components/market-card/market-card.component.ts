import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-market-card',
  templateUrl: './market-card.component.html',
  styleUrls: ['./market-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketCardComponent {
  @Input() image?: string;
  @Input() name?: string;
  @Input() category?: string;
  @Input() price?: number;
  @Input() brand?: string;
}
