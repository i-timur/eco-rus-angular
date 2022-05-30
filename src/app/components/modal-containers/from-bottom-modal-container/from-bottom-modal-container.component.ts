import {Component, ChangeDetectionStrategy, HostBinding} from '@angular/core';
import {CdkDialogContainer} from '@angular/cdk-experimental/dialog';
import {Portal} from '@angular/cdk/portal';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-from-bottom-modal-container',
  templateUrl: './from-bottom-modal-container.component.html',
  styleUrls: ['./from-bottom-modal-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(100%)'}),
        animate('300ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class FromBottomModalContainerComponent extends CdkDialogContainer {
  portal?: Portal<any>;
}
