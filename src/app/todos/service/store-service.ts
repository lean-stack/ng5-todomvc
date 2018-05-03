import { Todo } from '../model/todo';

export abstract class StoreService {
  abstract async getAll(): Promise<Todo[]>;

  abstract async create(title: string): Promise<Todo>;
  abstract async update(todo: Todo): Promise<Todo>;
  abstract async remove(id: number): Promise<Todo>;

  abstract async clearCompleted(): Promise<Todo[]>;
}
