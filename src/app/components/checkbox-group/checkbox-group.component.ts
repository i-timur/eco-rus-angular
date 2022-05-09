import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {CheckboxItem} from '@models/CheckboxItem';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxGroupComponent {

  @Input() options: CheckboxItem[] = [];
  @Output() toggle : EventEmitter<string[]> = new EventEmitter<string[]>();

  onToggle() {
    const checkedOptions = this.options.filter((opt) => opt.checked);
    this.toggle.emit(checkedOptions.map((opt) => opt.value));
  }
}
