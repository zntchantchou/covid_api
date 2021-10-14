import { DailyReportsService } from './daily-reports.service';
import { Injectable } from '@nestjs/common';
import { DailyReportParser } from 'scripts/reports/parse';

@Injectable()
export class DailyReportSeeder {
  constructor(private drService: DailyReportsService) {}
  public async saveReports() {
    const parser = new DailyReportParser();
    const dailyReports = await parser.parseReportsInFolder();
    if (dailyReports && dailyReports.length) {
      await this.drService.saveReports(dailyReports);
      console.log(
        `[DailyReportSeeder] ${dailyReports.length} reports were parsed`,
      );
    }
  }
}
