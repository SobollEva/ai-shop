import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: string, args?: any): any {
     if (!value) {
      return false;
    }
    return value.includes('#') ? value : `#${value}`;
  }

}
