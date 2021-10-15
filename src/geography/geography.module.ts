import { Module } from '@nestjs/common';
import { GeographyResolvers } from './geography.resolvers';
import { GeographyService } from './geography.service';

@Module({
  providers: [GeographyResolvers, GeographyService],
})
export class GeographyModule {}
