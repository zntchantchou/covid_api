import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { TagsService } from 'src/tags/tags.service';
import { CreateTagInput } from './dto/createTagInput';
import { Tag } from './tags.model';

@Resolver((of) => Tag)
export class TagsResolvers {
  constructor(private tagsService: TagsService) {}

  @Query((returns) => Tag)
  async getTag(@Args('id', { type: () => String }) id: string) {
    console.log('TagsResolver getTag');
    return this.tagsService.getById(id);
  }

  @Query(() => [Tag])
  async getTags(@Args('ids', { type: () => [String] }) ids: string[]) {
    console.log('TagsResolver getTag');
    return this.tagsService.getTagsById(ids);
  }

  @Mutation(() => Tag)
  async createTag(@Args('newTag', { type: () => CreateTagInput }) newTag: CreateTagInput) {
    console.log("tag resolver createTag");
    return this.tagsService.createOne(newTag);
  } 
}
