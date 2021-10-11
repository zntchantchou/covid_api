
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface DailyReportModel {
    fips?: Nullable<number>;
    provinceState?: Nullable<string>;
    countryRegion?: Nullable<string>;
    confirmed?: Nullable<number>;
    deaths?: Nullable<number>;
    recovered?: Nullable<number>;
    active?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    combinedKey?: Nullable<string>;
    lat?: Nullable<number>;
    long?: Nullable<number>;
    caseFatalityRatio?: Nullable<number>;
    incidenceRate?: Nullable<number>;
    iso?: Nullable<string>;
}

export interface Province {
    country: string;
    iso: string;
    population?: Nullable<string>;
    combinedKey: string;
    lat: string;
    long: string;
    provinceState: string;
}

export interface Country {
    country: string;
    iso: string;
    population?: Nullable<string>;
    combinedKey: string;
    lat: string;
    long: string;
    provinces: Province[];
}

export interface IQuery {
    getCountryReports(countryIso: string, endDate?: Nullable<string>, startDate?: Nullable<string>): DailyReportModel[] | Promise<DailyReportModel[]>;
    getProvinceReports(countryIso: string, province: string, startDate?: Nullable<string>, endDate?: Nullable<string>): DailyReportModel[] | Promise<DailyReportModel[]>;
    getCountries(): Country[] | Promise<Country[]>;
}

export type DateTime = any;
type Nullable<T> = T | null;
