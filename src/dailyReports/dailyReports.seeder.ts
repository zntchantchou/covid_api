import { DailyReportsService } from "./daily-reports.service";
import { Injectable, Inject } from '@nestjs/common';
import { DailyReportParser } from 'scripts/reports/parse';

@Injectable()
export class DailyReportSeeder {
  constructor(private drService: DailyReportsService) {}
  public async saveReports() {
    const parser = new DailyReportParser();
    const dailyReports = await parser.parseReportsInFolder();
    console.log(dailyReports, 'dailyReports');
    if(dailyReports.length) {
      // console.log('dailyReports', dailyReports, dailyReports.length);
      await this.drService.saveReports(dailyReports);
    }else {
      console.log(`[DailyReportSeeder] ${dailyReports.length} reports were parsed`);
    }
  }
} 