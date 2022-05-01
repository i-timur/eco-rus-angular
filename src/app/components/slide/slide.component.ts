import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {getSlideBackgroundColor} from '@utils/index';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideComponent implements OnInit {

  @Input() index!: number;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() buttonValue!: string;
  @Input() buttonTo!: string;
  @Input() image!: string;

  bgColor!: string;

  constructor() { }

  ngOnInit(): void {
    this.bgColor = getSlideBackgroundColor(this.index);
  }

}
