import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef, Optional, ViewChild, ElementRef, OnDestroy
} from '@angular/core';
import {FocusMonitor} from '@angular/cdk/a11y';
import {CdkConnectedOverlay, OverlayRef} from '@angular/cdk/overlay';
import {BehaviorSubject, map, mapTo, merge, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent implements OnInit, OnDestroy {

  @Input() title!: string;
  @Input() isOpen!: boolean;
  @Input() touched!: boolean;

  @ViewChild(CdkConnectedOverlay, {static: true})
  private connectedOverlay!: CdkConnectedOverlay;

  overlaySub!: Subscription;

  _isOpen!: boolean;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this._isOpen = this.isOpen;
    this.overlaySub = this.connectedOverlay.backdropClick.subscribe(() => {
      this.onToggle();
    });
  }

  ngOnDestroy(): void {
    this.overlaySub.unsubscribe();
  }

  onToggle() {
    this._isOpen = !this._isOpen;
    this.cdr.markForCheck();
  }
}
