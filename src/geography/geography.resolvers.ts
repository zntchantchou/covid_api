import { Resolver, Query, Args } from '@nestjs/graphql';
import { Country } from 'src/interfaces';
import { GeographyService } from './geography.service';

@Resolver()
export class GeographyResolvers {
  constructor(private geographyService: GeographyService) {}

  @Query()
  getCountries(): Country[] {
    return this.geographyService.getCountries();
  }

  @Query()
  getCountry(@Args('iso', { type: () => String }) iso: string): Country {
    return this.geographyService.getCountry(iso);
  }
}
