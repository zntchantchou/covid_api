import { Injectable, Inject } from '@nestjs/common';
import { models } from 'src/_db/constants';
import { DailyReport } from './dailyReports.model';
import { Model } from 'mongoose';
import { IDailyReportValue } from 'scripts/reports/types';
import { GetCountryReportsDTO, GetProvinceReportsDTO } from './dto/dto';
import { GraphQLError } from 'graphql';
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
      console.log(report);
      return await report.save();
    } catch (e) {
      console.log(e);
    }
  }

  async getCountryReports(
    info: any,
    { startDate, endDate, countryIso }: GetCountryReportsDTO,
  ) {
    const fields = Object.keys(graphqlFields(info));
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

  async getProvinceReports({
    startDate,
    endDate,
    countryIso,
    province,
  }: GetProvinceReportsDTO) {
    try {
      if (!province) {
        return new GraphQLError(
          "The province field cannot have a falsy value , such as '', please provide a valid value",
        );
      }
      let searchParams: any = {
        iso: countryIso,
        provinceState: province,
      };
      const dateFilter = this.databaseUtils.createDateFilter(
        startDate,
        endDate,
        'createdAt',
      );
      searchParams = { ...searchParams, ...dateFilter };
      return this.dailyReportModel.find(searchParams);
    } catch (e) {}
  }
}
