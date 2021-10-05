import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateTodoInput {
  @Field()
  title: string;
  @Field()
  isCompleted: boolean;
  @Field({nullable: true})
  deadline: string;
  @Field(type => [String], {nullable: true})
  tags: string[];
}