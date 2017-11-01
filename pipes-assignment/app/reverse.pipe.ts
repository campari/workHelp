import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  pure: false
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    if(value === null){
      return value;
    }
    return value.split("").reverse().join("");
  }

}
