import { Field, ID, ObjectType } from '@nestjs/graphql';

// interface used to generate schema

@ObjectType({ description: 'tag' })
export class Tag {
  @Field((type) => ID)
  id: string;
  @Field()
  name: string;
}

