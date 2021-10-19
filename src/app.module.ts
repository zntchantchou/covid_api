import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { cwd } from 'process';
import { DailyReportsModule } from './dailyReports/daily-reports.module';
import { GeographyModule } from './geography/geography.module';
import { mocks } from 'src/_mocks/mocks';
import { UserModule } from './user/user.module';
import { UpperCaseDirective } from 'src/_directives/upper';

@Module({
  imports: [
    GraphQLModule.forRoot({
      definitions: {
        path: join(cwd(), 'src/interfaces.ts'),
      },
      typePaths: ['./**/*.gql'],
      mocks,
      mockEntireSchema: false,
      schemaDirectives: { upper: UpperCaseDirective },
    }),
    DailyReportsModule,
    GeographyModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
