import {Connection} from 'mongoose';
import { TagSchema } from './tags.schema';
import { models, config } from 'src/db/constants';

export const tagsProviders = [{
  provide: models.tag, 
  useFactory: (connection: Connection) => connection.model('TAG', TagSchema),
  inject: [config.connectionName] 
}]