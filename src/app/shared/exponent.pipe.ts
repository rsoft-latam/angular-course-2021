import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponent'
})

export class ExponentPipe implements PipeTransform {

  transform(value: number): number {
    return value * 2;
  }

}
