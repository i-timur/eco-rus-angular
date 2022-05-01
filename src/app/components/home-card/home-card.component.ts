import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeCardComponent implements OnInit {

  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() to!: string;
  @Input() image!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
