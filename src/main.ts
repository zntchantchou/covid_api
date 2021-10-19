import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import downloadReport from 'scripts/reports/download';

async function bootstrap() {
  // downloadReport('10-18-2021');
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
