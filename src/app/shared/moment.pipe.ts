import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'moment',
  pure: false
})
export class MomentPipe implements PipeTransform {
  transform(m: moment.Moment | any, format: string = 'MMMM YYYY'): string { // m type should be only moment.Moment
    return m.format(format);
  }

}
