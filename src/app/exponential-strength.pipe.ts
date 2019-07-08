import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(value:number, expo:number): number {
    return value * (isNaN(expo) ? 1 : expo);
  }

}

// 2 | exponentialStrength : 2
// 2 ** 1
