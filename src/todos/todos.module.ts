import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/database.module';
import { TagsModule } from 'src/tags/tags.module';
import { tagsProviders } from 'src/tags/tags.providers';
import { TagsService } from 'src/tags/tags.service';
import { todosProviders } from './todos.providers';
import { TodosResolvers } from './todos.resolver';
import { TodosService } from './todos.service';

@Module({
  imports: [DatabaseModule, TagsModule],
  controllers: [],
  providers: [...todosProviders, TodosService, TodosResolvers, TagsService],
})
export class TodosModule {}
