import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { models } from 'src/db/constants';
import { Todo } from './todos.model';

@Injectable()
export class TodosService {
  constructor(@Inject(models.todo) private todoModel: Model<Todo>) {}

  async getAll(): Promise<Todo[]>{
    return this.todoModel.find();
  }

  async getById(todoId: string): Promise<Todo>{
    return this.todoModel.findById(todoId);
  }
}
