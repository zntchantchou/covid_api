import { Field, ObjectType } from '@nestjs/graphql';
// interface used to generate schema

@ObjectType({ description: 'dailyReport' })
export class DailyReport {
  @Field({ nullable: true })
  fips: Number;
  @Field({ nullable: true })
  provinceState: String;
  @Field({ nullable: true })
  countryRegion: String;
  @Field({ nullable: true })
  confirmed: Number;
  @Field({ nullable: true })
  deaths: Number;
  @Field({ nullable: true })
  recovered: Number;
  @Field({ nullable: true })
  active: Number;
  @Field({ nullable: true })
  createdAt: Date;
  @Field({ nullable: true })
  combinedKey: String;
  @Field({ nullable: true })
  lat: Number;
  @Field({ nullable: true })
  long: Number;
  @Field({ nullable: true })
  caseFatalityRatio: Number;
  @Field({ nullable: true })
  incidenceRate: Number;
  @Field({ nullable: true })
  iso: String;
}
