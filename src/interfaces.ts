
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface DailyReport {
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

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    service: string;
    avatar: string;
    position: string;
}

export interface IQuery {
    getCountryReports(countryIso: string, endDate?: Nullable<string>, startDate?: Nullable<string>): DailyReport[] | Promise<DailyReport[]>;
    getCountries(): Country[] | Promise<Country[]>;
    getCountry(iso: string): Country | Promise<Country>;
    getUser(): User | Promise<User>;
}

export type DateTime = any;
type Nullable<T> = T | null;
