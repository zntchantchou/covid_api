import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Tag } from 'src/tags/tags.model';
// interface used to generate schema 

@ObjectType({ description: 'todo' })
export class Todo {
  @Field(() => ID)
  id: string;
  @Field()
  title: string;
  @Field()
  isCompleted: boolean;
  @Field({ nullable: true })
  deadline: string;
  @Field(type => [Tag], {nullable: true})
  tags: Tag[]
}

export type ITodo = typeof Todo;
