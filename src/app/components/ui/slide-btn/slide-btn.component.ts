import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-slide-btn',
  templateUrl: './slide-btn.component.html',
  styleUrls: ['./slide-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideBtnComponent implements OnInit {

  @Input() value!: string;
  @Input() to!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
