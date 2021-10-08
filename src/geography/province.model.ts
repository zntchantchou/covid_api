import { Field, ID, ObjectType, InterfaceType } from '@nestjs/graphql';
import { Geography } from './geography.model';

// interface used to generate schema

@ObjectType({ description: 'province' })
export class Province extends Geography {
  @Field()
  provinceState: string;
}
