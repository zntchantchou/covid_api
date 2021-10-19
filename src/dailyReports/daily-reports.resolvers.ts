import { Resolver, Query, Args, Info, Context } from '@nestjs/graphql';
import { DailyReportsService } from './daily-reports.service';
import { DailyReport } from 'src/interfaces';

@Resolver()
export class DailyReportResolvers {
  constructor(private dailyReportService: DailyReportsService) {}

  @Query()
  async getCountryReports(
    @Args('startDate', { type: () => String, nullable: true })
    startDate: string,
    @Args('endDate', { type: () => String, nullable: true }) endDate: string,
    @Args('countryIso', { type: () => String }) countryIso: string,
    @Info() info: any,
    @Context() ctx: any,
  ): Promise<DailyReport[]> {
    console.log('INFO', info);
    // console.log('CONTEXT', ctx);
    return this.dailyReportService.getCountryReports(info, {
      countryIso,
      startDate,
      endDate,
    });
  }
}
