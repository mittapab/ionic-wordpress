import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'qoutes'
})
export class QoutesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
