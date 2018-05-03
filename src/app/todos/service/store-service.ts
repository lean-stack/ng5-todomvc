import { Todo } from '../model/todo';

export abstract class StoreService {
  abstract async getAll(): Promise<Todo[]>;

  abstract async create(title: string): Promise<Todo>;
  abstract async update(): Promise<Todo>;
  abstract async remove(): Promise<Todo>;

  abstract async clearCompleted(): Promise<Todo>;
}
