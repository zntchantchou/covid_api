import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { cwd } from 'process';
import { DailyReportsModule } from './dailyReports/daily-reports.module';
import { GeographyModule } from './geography/geography.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(cwd(), 'src/schema.gql'),
      definitions: {
        path: join(cwd(), 'src/graphql.ts'),
      },
    }),
    DailyReportsModule,
    GeographyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
