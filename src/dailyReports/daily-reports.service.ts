import { Injectable, Inject } from '@nestjs/common';
import { models } from 'src/_db/constants';
import { DailyReport } from 'src/interfaces';
import { Model } from 'mongoose';
import { IDailyReportValue } from 'scripts/reports/types';
import { GetCountryReportsDTO } from './dto/dto';
import * as graphqlFields from 'graphql-fields';
import { DatabaseUtils } from 'src/_db/database.utils';

@Injectable()
export class DailyReportsService {
  constructor(
    @Inject(models.dailyReports)
    private dailyReportModel: Model<DailyReport>,
    private databaseUtils: DatabaseUtils,
  ) {}

  async saveReports(dailyReports: IDailyReportValue[]) {
    dailyReports.map(async (report) => await this.saveReport(report));
  }

  async saveReport(dailyReport: IDailyReportValue) {
    try {
      const report = new this.dailyReportModel(dailyReport);
      return await report.save();
    } catch (e) {
      console.log(e);
    }
  }

  async getCountryReports(
    info: any,
    { startDate, endDate, countryIso }: GetCountryReportsDTO,
  ) {
    // uses a package to get the query's fields easily
    const fields = Object.keys(graphqlFields(info));
    console.log('fields', fields);
    try {
      let searchParams: any = {
        iso: countryIso.toUpperCase(),
        provinceState: '',
      };
      const dateFilter = this.databaseUtils.createDateFilter(
        startDate,
        endDate,
        'createdAt',
      );
      searchParams = { ...searchParams, ...dateFilter };
      return this.dailyReportModel
        .find(searchParams)
        .sort({ createdAt: 1 })
        .select(fields.join(' '));
    } catch (e) {}
  }
}
