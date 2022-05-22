import { Pipe, PipeTransform } from '@angular/core';
import {Material} from '@components/user-history/user-history.component';

@Pipe({
  name: 'material'
})
export class MaterialPipe implements PipeTransform {
  transform(value: Material): string {
    return `${value.name}: ${value.weight} ${value.measure}`;
  }
}
