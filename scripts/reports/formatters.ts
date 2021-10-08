import {
  IRawDailyReportValue,
  IDailyReportValue,
} from './types';
import { Date as MongooseDate } from 'mongoose'; 


export function formatReport(
  report: IRawDailyReportValue,
): IDailyReportValue {
  return {
    fips: nullify(parseInt(report.FIPS)),
    provinceState: report.Province_State,
    countryRegion: report.Country_Region,
    createdAt: formatDate(report.Last_Update), 
    lat: nullify(parseFloat(report.Lat)),
    long: nullify(parseFloat(report.Long_)),
    confirmed: nullify(parseFloat(report.Confirmed)),
    deaths: nullify(parseFloat(report.Deaths)),
    recovered: nullify(parseFloat(report.Recovered)),
    active: nullify(parseFloat(report.Active)),
    combinedKey: report.Combined_Key,
    incidenceRate: nullify(parseFloat(report.Incident_Rate)),
    caseFatalityRatio: nullify(parseFloat(report.Case_Fatality_Ratio)),
  };
}

function nullify(value: number): number | null {
  return isNaN(value) ? undefined : value;
}

function formatDate(value: string) {
  let noSeconds = value.slice(0, 10);
  const asDigits = noSeconds
  .split('-')
  .map((elt) => parseInt(elt));
  // TODO there is an offset , hours is an hour ahead of js Date
  return new Date(asDigits[0], asDigits[1] - 1, asDigits[2] - 1, 1, 0, 0);
}
