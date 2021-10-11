import {Connection} from 'mongoose';
import { DailyReportSchema } from './dailyReports.schema';
import { models, config } from 'src/_db/constants';

export const dailyReportsProviders = [{
  provide: models.dailyReports, 
  useFactory: (connection: Connection) => connection.model('DAILY_REPORT', DailyReportSchema),
  inject: [config.connectionName] 
}]