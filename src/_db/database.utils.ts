import { Injectable } from '@nestjs/common';
import { isDate } from 'date-fns';


interface IDateFilter {
  [index: string]: { [index: string]: Date}
};

@Injectable()
export class DatabaseUtils {
  createDateFilter(startDate, endDate, fieldName): IDateFilter {
    let dateFilter = startDate || endDate ? { [fieldName]: {} } : {};
    if (startDate && isDate(new Date(startDate))) {
      dateFilter = { [fieldName]: { $gte: new Date(startDate) } };
    }
    if (endDate && isDate(new Date(endDate))) {
      dateFilter = {
        [fieldName]: { ...dateFilter[fieldName], $lte: new Date(endDate) },
      };
    }
    return dateFilter;
  }
}


