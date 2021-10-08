import { Field, ID, ObjectType, InterfaceType} from '@nestjs/graphql';
// interface used to generate schema 

@InterfaceType()
export abstract class Geography {
  @Field()
  country: string;
  @Field()
  iso: string;
  @Field({nullable: true})
  population: string;
  @Field()
  combinedKey: string; 
  @Field()
  lat: string;
  @Field()
  long: string;
}

