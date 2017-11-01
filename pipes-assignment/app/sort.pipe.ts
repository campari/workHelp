import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string): any {
    console.log(propName);
    if(propName === ''){
      return value;
    }
    const sorted =  value.sort(
      function(a, b) {
        const nameA = a[propName].toUpperCase(); 
        const nameB = b[propName].toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    console.log(sorted);
    return sorted;
  }

}
