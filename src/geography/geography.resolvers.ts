import { Resolver, Query, Info } from '@nestjs/graphql';
import { Country } from './country.model';
import { GeographyService } from './geography.service';

@Resolver((of) => Country)
export class GeographyResolvers {
  constructor(private geographyService: GeographyService) {}

  @Query(() => [Country])
  getCountries(): Country[] {
    return this.geographyService.getCountries();
  }
}
