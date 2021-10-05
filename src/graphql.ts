
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

export interface IMutation {
    createTag(newTag: CreateTagInput): Tag | Promise<Tag>;
    createTodo(newTodo: CreateTodoInput): Todo | Promise<Todo>;
    updateTodo(id: string, updatedTodo: CreateTodoInput): Todo | Promise<Todo>;
}

export interface IQuery {
    getAll(): Todo[] | Promise<Todo[]>;
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

type Nullable<T> = T | null;
