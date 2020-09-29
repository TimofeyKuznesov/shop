import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe<T> implements PipeTransform {

  transform(value: Array<T> | void, name: string, reverse: boolean = true): Array<T> {
    const compare = (a = {}, b = {}) => {
      const an = a[name];
      const bn = b[name];
      let ret = 0;
      if ( typeof(an) === 'string'){
        ret = an.localeCompare(bn);
      }
      else {
        ret = an - bn;
      }
      return reverse ? (ret * -1) : ret;
    };

    return (value || []).sort(compare);
  }

}
