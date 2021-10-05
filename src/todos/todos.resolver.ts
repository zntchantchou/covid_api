import { Resolver, ResolveField, Query, Args, Parent} from "@nestjs/graphql";
import { TagsService } from "src/tags/tags.service";
import { Todo } from "./todos.model";
import { TodosService } from "./todos.service";


@Resolver(of => Todo)
export class TodosResolvers {
  constructor(private todoService: TodosService, private tagService: TagsService) {}

  @Query(returns => Todo)
  async getTodo(@Args('id', {type: () => String}) id: string) {
    console.log('TODOSERVICE getTodo with id', id);
    return this.todoService.getById(id);
  }

  @ResolveField() 
  async tags(@Parent() todo: Todo) {
    const {tags} = todo;
    console.log('TODOSERVICE resolve tags');
    return this.tagService.getTagsById(tags.map(tag => tag.id))
  }

}