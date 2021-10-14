import { Injectable } from '@nestjs/common';
import { isDate, sub } from 'date-fns';

interface IDateFilter {
  [index: string]: { [index: string]: Date };
}

@Injectable()
export class DatabaseUtils {
  createDateFilter(startDate, endDate, fieldName): IDateFilter {
    // if no dates are provided , selects the past week by default (8 days because data for today is not available)
    let dateFilter =
      startDate || endDate
        ? { [fieldName]: {} }
        : { [fieldName]: { $gte: sub(new Date(), { days: 8 }) } };
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
