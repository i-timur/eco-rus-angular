import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Portal} from '@angular/cdk/portal';
import {animate, style, transition, trigger} from '@angular/animations';
import {CdkDialogContainer} from '@angular/cdk-experimental/dialog';

@Component({
  selector: 'app-from-right-modal-container',
  templateUrl: './from-right-modal-container.component.html',
  styleUrls: ['./from-right-modal-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('300ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class FromRightModalContainerComponent extends CdkDialogContainer {
  portal?: Portal<any>;
}
