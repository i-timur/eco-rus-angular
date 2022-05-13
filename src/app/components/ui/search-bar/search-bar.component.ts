import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: SearchBarComponent,
      multi: true
    }]
})
export class SearchBarComponent implements ControlValueAccessor {

  value: string = '';
  onChange?: (value: string) => void;
  onTouched?: () => void;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: string): void {
    this.value = obj;
  }

  setValue(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    if (this.onChange) {
      this.onChange(this.value);
    }
  }
}
