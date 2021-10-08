import { Injectable } from '@nestjs/common';
import * as geographiesJson from './geographies.json';
import { Country } from './country.model';

@Injectable()
export class GeographyService {

public getCountries(): Country[] {
  // @ts-ignore
    return geographiesJson as Country[];
  }
}
