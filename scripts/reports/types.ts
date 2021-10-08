export interface IRawDailyReportValue {
  FIPS: string;
  Admin2: string;
  Province_State: string;
  Country_Region: string;
  Last_Update: string;
  Lat: string;
  Long_: string;
  Confirmed: string;
  Deaths: string;
  Recovered: string;
  Active: string;
  Combined_Key: string;
  Incident_Rate: string;
  Case_Fatality_Ratio: string;
}

export interface IDailyReportValue {
  fips?: number;
  provinceState?: string;
  countryRegion: string;
  createdAt: Date;
  lat?: number;
  long?: number;
  confirmed?: number;
  deaths?: number;
  recovered?: number;
  active?: number;
  combinedKey?: string;
  incidenceRate?: number;
  caseFatalityRatio?: number;
}