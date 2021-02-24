import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit?: any, ellipsis?: boolean) {
    if (!value) return null;

    let actualLimit = limit ? limit : 150;

    if (value.length > actualLimit) ellipsis = true;

    let addEllipsis = ellipsis ? '...' : '';
    return value.substr(0, actualLimit) + addEllipsis;
  }
}
