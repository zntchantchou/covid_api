import { NestFactory } from '@nestjs/core';
import { DailyReportSeeder } from '../dailyReports/dailyReports.seeder'; // import Saver from 'scripts/reports/save';
import { DailyReportsModule } from '../dailyReports/daily-reports.module';

async function bootstrap() {
  const ctx = await NestFactory.createApplicationContext(DailyReportsModule);
  const seeder = ctx.get(DailyReportSeeder);
  seeder.saveReports();
}
bootstrap();
