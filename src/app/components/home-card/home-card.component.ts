import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeCardComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() to!: string;
  @Input() image!: string;
}
