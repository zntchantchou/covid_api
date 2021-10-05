import { Resolver, Query, Args } from '@nestjs/graphql';
import { TagsService } from 'src/tags/tags.service';

import { Tag } from './tags.model';

@Resolver((of) => Tag)
export class TagsResolvers {
  constructor(private tagsService: TagsService) {}

  @Query((returns) => Tag)
  async getTag(@Args('id', { type: () => String }) id: string) {
    console.log('TagsResolver getTag');
    return this.tagsService.getById(id);
  }

  async getTags(@Args('ids', { type: () => [String] }) ids: string[]) {
    console.log('TagsResolver getTag');
    return this.tagsService.getTagsById(ids);
  }
}
