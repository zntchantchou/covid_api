export interface GetCountryReportsDTO {
  countryIso: string;
  /**
   * Expects a date as a UTC string e.g
   */
  startDate?: string;
  /**
   * Expects a date as a UTC string e.g
   */
  endDate?: string;
}

export interface GetProvinceReportsDTO extends GetCountryReportsDTO {
  /**
   * Name of the province found in country > provinces > provinceState
   */
  province: string;
}
