import {
  Resolver,
  ResolveField,
  Query,
  Args,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import { TagsService } from 'src/tags/tags.service';
import { Todo } from './todos.model';
import { CreateTodoInput } from './dto/createTodoInput';
import { TodosService } from './todos.service';

@Resolver((of) => Todo)
export class TodosResolvers {
  constructor(
    private todoService: TodosService,
    private tagService: TagsService,
  ) {}

  @Query(() => Todo)
  async getTodo(@Args('id', { type: () => String }) id: string) {
    console.log('TODOSERVICE getTodo with id', id);
    return this.todoService.getById(id);
  }

  @Mutation(() => Todo)
  async createTodo(
    @Args({ name: 'newTodo', type: () => CreateTodoInput })
    newTodo: CreateTodoInput,
  ) {
    console.log('TodoResolvers createPost');
    return this.todoService.createOne(newTodo);
  }

  @Mutation(() => Todo)
  async updateTodo(
    @Args({ name: 'updatedTodo', type: () => CreateTodoInput })
    updatedTodo: CreateTodoInput,
    @Args('id') todoId: string,
  ) {
    return this.todoService.updateOne(todoId, updatedTodo);
  }

  @Query(() => [Todo])
  async getAll() {
    return this.todoService.getAll();
  }

  @ResolveField()
  async tags(@Parent() todo: Todo) {
    const { tags } = todo;
    console.log('tags received ', tags);
    console.log('TODOSERVICE resolve tags');
    // console.log('mapped', tags.map((tag) => tag.toString()));

    return this.tagService.getTagsById(tags.map((tag) => tag.toString()));
  }
}
