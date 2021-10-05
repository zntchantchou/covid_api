
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IQuery {
    getTag(id: string): Tag | Promise<Tag>;
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

type Nullable<T> = T | null;
