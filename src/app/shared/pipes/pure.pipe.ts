import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pure',
  pure: true
})
export class PurePipe implements PipeTransform {

  transform(data: number[]): number[] {
    return data.filter(s => s%2 === 0);
  }

}