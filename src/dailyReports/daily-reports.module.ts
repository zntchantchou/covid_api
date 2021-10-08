import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/database.module';
import { DailyReportsService } from 'src/dailyReports/daily-reports.service';
import { dailyReportsProviders } from 'src/dailyReports/dailyReports.providers';
import { DailyReportSeeder } from 'src/dailyReports/dailyReports.seeder';
import { DailyReportResolvers } from 'src/dailyReports/daily-reports.resolvers';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [
    DailyReportsService,
    ...dailyReportsProviders,
    DailyReportSeeder,
    DailyReportResolvers,
  ],
})
export class DailyReportsModule {}
