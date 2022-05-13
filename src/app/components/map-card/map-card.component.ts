import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-map-card',
  templateUrl: './map-card.component.html',
  styleUrls: ['./map-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapCardComponent implements OnInit {

  @Input() image!: string;
  @Input() address!: string;
  @Input() text!: string;

  ngOnInit(): void {
    this.text = this.text.length > 50 ? this.text.slice(0, 49) + '...' : this.text;
  }
}
