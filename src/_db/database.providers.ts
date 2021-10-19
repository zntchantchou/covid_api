import * as mongoose from 'mongoose';
import { config } from 'src/_db/constants';
export const databaseProviders = [
  {
    provide: config.connectionName,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost/covidData'),
  },
];
