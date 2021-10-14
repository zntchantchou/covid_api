import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import downloadReport from 'scripts/reports/download';
// import {DailyReportParser} from 'scripts/reports/parse';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
