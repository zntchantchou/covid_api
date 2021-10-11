import { Resolver, Query, Args } from '@nestjs/graphql';
import { Country } from './country.model';
import { GeographyService } from './geography.service';

@Resolver(() => Country)
export class GeographyResolvers {
  constructor(private geographyService: GeographyService) {}

  @Query(() => [Country])
  getCountries(): Country[] {
    return this.geographyService.getCountries();
  }

  @Query(() => Country)
  getCountry(@Args('iso', { type: () => String }) iso: string): Country {
    return this.geographyService.getCountry(iso);
  }
}
