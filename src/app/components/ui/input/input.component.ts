import {Component, ChangeDetectionStrategy, HostBinding, Optional} from '@angular/core';
import {NgControl} from '@angular/forms';

@Component({
  selector: '[app-input]',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {

  @HostBinding('class.app-invalid')
  get invalid(): boolean {
    return this._ngControl?.invalid ?? false;
  }

  @HostBinding('class.app-touched')
  get touched(): boolean {
    return this._ngControl?.touched ?? false;
  }

  constructor(@Optional() private readonly _ngControl?: NgControl) { }
}
