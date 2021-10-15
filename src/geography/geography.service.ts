import { Injectable } from '@nestjs/common';
import * as geographiesJson from './geographies.json';
import { Country } from 'src/interfaces';

@Injectable()
export class GeographyService {
  public getCountries(): Country[] {
    return geographiesJson as Country[];
  }

  public getCountry(iso: string): Country {
    return geographiesJson.find((c) => c.iso === iso);
  }
}
