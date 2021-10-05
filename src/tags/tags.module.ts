import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/database.module';
import { TagsService } from './tags.service';
import { tagsProviders } from './tags.providers';
import { Tag } from './tags.model';
import { TagsResolvers } from './tags.resolvers';

@Module({
  imports: [DatabaseModule],
  providers: [TagsService, TagsResolvers, ...tagsProviders],
  exports: [TagsService, TagsResolvers, ...tagsProviders],
  controllers: [],
})

export class TagsModule {}
