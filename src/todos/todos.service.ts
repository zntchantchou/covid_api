import { Injectable, Inject, ConsoleLogger } from '@nestjs/common';
import _ from 'lodash';
import { Model } from 'mongoose';
import { models } from 'src/db/constants';
import { CreateTodoInput } from './dto/createTodoInput';
import { Todo } from './todos.model';

@Injectable()
export class TodosService {
  constructor(@Inject(models.todo) private todoModel: Model<Todo>) {}

  async getAll(): Promise<Todo[]>{
    return this.todoModel.find().populate('tags');
  }

  async getById(todoId: string): Promise<Todo>{
    return this.todoModel.findById(todoId);
  }

  async createOne(todo: CreateTodoInput) {
    console.log('creating Todo');
    const newTodo = new this.todoModel(todo);
    return newTodo.save();
  }

  async updateOne(id: string, updated: CreateTodoInput) {
    const todo = await this.todoModel.findById(id);
     _.merge(todo, updated);
     return todo.save()
  }
}
