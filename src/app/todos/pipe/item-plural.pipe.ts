import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemPlural'
})
export class ItemPluralPipe implements PipeTransform {

  transform(value: number, word: string = 'item'): any {

    return value === 1 ? word : word + 's';
  }

}
