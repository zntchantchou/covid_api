import { Injectable, Inject } from '@nestjs/common';
import { models } from 'src/db/constants';
import { DailyReportModel } from './dailyReports.model';
import { Model } from 'mongoose';
import { IDailyReportValue } from 'scripts/reports/types';
import { GetCountryReportsDTO, GetProvinceReportsDTO} from './dto/dto';
import { isDate } from 'date-fns';
import { GraphQLError } from 'graphql';

@Injectable()
export class DailyReportsService {
  constructor(
    @Inject(models.dailyReports)
    private dailyReportModel: Model<DailyReportModel>,
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

  async getCountryReports({startDate, endDate, countryIso}: GetCountryReportsDTO) {
    try {
      let searchParams: any = {
        iso: countryIso,
        provinceState: '',
      };
      let dateFilter = {createdAt: {}};
      if(startDate && isDate(new Date(startDate))) dateFilter = {createdAt: {"$gte": new Date(startDate)}}
      if(endDate && isDate(new Date(endDate))) dateFilter = {createdAt: {...dateFilter.createdAt, "$lte": new Date(endDate)}}
      searchParams = {...searchParams, ...dateFilter};
      const reports = this.dailyReportModel
      .find(searchParams)

      return reports;
    } catch(e) {}
  }

  async getProvinceReports({startDate, endDate, countryIso, province}: GetProvinceReportsDTO) {
    try {
      if(!province) {
        return new GraphQLError("The province field cannot have a falsy value , such as '', please provide a valid value");
      }
      let searchParams: any = {
        iso: countryIso,
        provinceState: province,
      };
      let dateFilter = {createdAt: {}};
      if(startDate && isDate(new Date(startDate))) dateFilter = {createdAt: {"$gte": new Date(startDate)}}
      if(endDate && isDate(new Date(endDate))) dateFilter = {createdAt: {...dateFilter.createdAt, "$lte": new Date(endDate)}}
      searchParams = {...searchParams, ...dateFilter};
      const reports = this.dailyReportModel
      .find(searchParams)

      return reports;
    } catch(e) {}
  }
}
