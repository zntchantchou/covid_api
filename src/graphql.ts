
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateTagInput {
    name: string;
}

export interface CreateTodoInput {
    deadline?: Nullable<string>;
    isCompleted: boolean;
    tags?: Nullable<string[]>;
    title: string;
}

export interface Country {
    combinedKey: string;
    country: string;
    iso: string;
    lat: string;
    long: string;
    population?: Nullable<string>;
    provinces: Province[];
}

export interface DailyReportModel {
    active?: Nullable<number>;
    caseFatalityRatio?: Nullable<number>;
    combinedKey?: Nullable<string>;
    confirmed?: Nullable<number>;
    countryRegion?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    deaths?: Nullable<number>;
    fips?: Nullable<number>;
    incidenceRate?: Nullable<number>;
    iso?: Nullable<string>;
    lat?: Nullable<number>;
    long?: Nullable<number>;
    provinceState?: Nullable<string>;
    recovered?: Nullable<number>;
}

export interface IMutation {
    createTag(newTag: CreateTagInput): Tag | Promise<Tag>;
    createTodo(newTodo: CreateTodoInput): Todo | Promise<Todo>;
    updateTodo(id: string, updatedTodo: CreateTodoInput): Todo | Promise<Todo>;
}

export interface Province {
    combinedKey: string;
    country: string;
    iso: string;
    lat: string;
    long: string;
    population?: Nullable<string>;
    provinceState: string;
}

export interface IQuery {
    getAll(): Todo[] | Promise<Todo[]>;
    getCountries(): Country[] | Promise<Country[]>;
    getCountryReports(countryIso: string, endDate: string, startDate: string): DailyReportModel[] | Promise<DailyReportModel[]>;
    getProvinceReports(countryIso: string, endDate: string, province: string, startDate: string): DailyReportModel[] | Promise<DailyReportModel[]>;
    getTag(id: string): Tag | Promise<Tag>;
    getTags(ids: string[]): Tag[] | Promise<Tag[]>;
    getTodo(id: string): Todo | Promise<Todo>;
}

export interface Tag {
    id: string;
    name: string;
}

export interface Todo {
    deadline?: Nullable<string>;
    id: string;
    isCompleted: boolean;
    tags?: Nullable<Tag[]>;
    title: string;
}

export type DateTime = any;
type Nullable<T> = T | null;
