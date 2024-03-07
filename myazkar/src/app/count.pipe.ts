import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})

export class CountPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    switch (value) {
      case 1:
        return 'one time';
        break;
    
      case 2:
        return 'two times';
        break;
    
      case 3:
        return 'three times';
        break;
    
      case 4:
        return 'four times';
        break;

        default:
          return ' ';
          break;
  }

}
}