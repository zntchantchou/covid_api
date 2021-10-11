import { Resolver, Query, Args, Info } from '@nestjs/graphql';
import { DailyReportsService } from './daily-reports.service';
import { DailyReportModel as DailyReport } from './dailyReports.model';

@Resolver(() => DailyReport)
export class DailyReportResolvers {
  constructor(private dailyReportService: DailyReportsService) {}

  @Query(() => [DailyReport])
  async getCountryReports(
    // a comment i would like to see in the editor
    @Args('startDate', { type: () => String, nullable: true })
    startDate: string,
    @Args('endDate', { type: () => String, nullable: true }) endDate: string,
    @Args('countryIso', { type: () => String }) countryIso: string,
    @Info() info: any,
  ) {
    return this.dailyReportService.getCountryReports(info, {
      countryIso,
      startDate,
      endDate,
    });
  }

  @Query(() => [DailyReport])
  async getProvinceReports(
    @Args('endDate', { type: () => String, nullable: true }) endDate: string,
    @Args('startDate', { type: () => String, nullable: true })
    startDate: string,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    @Args('province', { type: () => String! }) province: string,
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
