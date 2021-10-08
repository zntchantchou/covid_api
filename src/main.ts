import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Parser } from 'scripts/lookupTable/Parser';
// import downloadReport from 'scripts/reports/download';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  // const parser = new Parser();
  // parser.saveGeographies();
  // downloadReport('10-06-2021');
  await app.listen(3000);
}
bootstrap();
