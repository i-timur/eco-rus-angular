export class CheckboxItem {
  value: string;
  label: string;
  checked?: boolean;

  constructor(value: string | number, label: string, checked?: boolean) {
    this.value = typeof value === 'string' ? value : value.toString();
    this.label = label;
    this.checked = checked ?? false;
  }
}
