import { Field, ID, ObjectType, InterfaceType, ResolveField} from '@nestjs/graphql';
import { Geography } from './geography.model';
import { Province } from './province.model';
// interface used to generate schema 

@ObjectType({ description: 'country' })
export  class Country extends Geography {
  @Field(type => [Province])
  provinces: Province[];
}



