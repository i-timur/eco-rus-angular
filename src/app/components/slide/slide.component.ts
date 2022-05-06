import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

export type Theme = 'green' | 'orange' | 'mint';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideComponent {
  @Input() theme!: Theme;
  @Input() title!: string;
  @Input() buttonValue!: string;
  @Input() buttonTo!: string;
  @Input() image!: string;
}
