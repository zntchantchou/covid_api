import {
  Resolver,
  ResolveField,
  Query,
  Args,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import { DailyReportsService } from './daily-reports.service';
import { DailyReportModel as DailyReport } from './dailyReports.model';

@Resolver((of) => DailyReport)
export class DailyReportResolvers {
  constructor(private dailyReportService: DailyReportsService) {}

  @Query(() => [DailyReport])
  async getCountryReports(
    @Args('startDate', { type: () => String }) startDate: string,
    @Args('countryIso', { type: () => String }) countryIso: string,
    @Args('endDate', { type: () => String }) endDate: string,
  ) {
    return this.dailyReportService.getCountryReports({
      countryIso,
      startDate,
      endDate,
    });
  }

  @Query(() => [DailyReport])
  async getProvinceReports(
    @Args('endDate', { type: () => String }) endDate: string,
    @Args('startDate', { type: () => String }) startDate: string,
    @Args('province', { type: () => String }) province: string,
    @Args('countryIso', { type: () => String }) countryIso: string,
  ) {
    return this.dailyReportService.getProvinceReports({
      countryIso,
      startDate,
      endDate,
      province,
    });
  }
}
