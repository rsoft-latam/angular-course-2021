import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impure',
  pure: false
})
export class ImpurePipe implements PipeTransform {

  transform(data: number[]): number[] {
    return data.filter(s => s%2 === 0);
  }

}