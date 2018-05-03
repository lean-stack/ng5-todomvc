import { Injectable } from '@angular/core';
import { StoreService } from './store-service';
import { Todo } from '../model/todo';

@Injectable()
export class LocalStoreService extends StoreService {

  async getAll(): Promise<Todo[]> {
    return this.loadData().todos;  // implicitly promisified
  }
  create(title: string): Promise<Todo> {
    return new Promise<Todo>( (resolve, reject) => {
      const data = this.loadData();
      const todo = {
        id: ++data.lastId,
        title: title,
        completed: false
      };
      data.todos.push(todo);
      this.saveData(data);
      resolve(todo);
    });
  }

  update(todo: Todo): Promise<Todo> {
    return new Promise<Todo>( (resolve, reject) => {
      const data = this.loadData();
      const todoIndex = data.todos.findIndex( t => t.id === todo.id);
      data.todos[todoIndex] = todo;
      this.saveData(data);
      resolve(todo);
    });
  }
  remove(id: number): Promise<Todo> {
    return new Promise<Todo>( (resolve, reject) => {
      const data = this.loadData();
      const todoIndex = data.todos.findIndex( t => t.id === id);
      const deletedTodos = data.todos.splice(todoIndex, 1);
      this.saveData(data);
      resolve(deletedTodos[0]);
    });
  }

  clearCompleted(): Promise<Todo[]> {
    return new Promise<Todo[]>( (resolve, reject) => {
      const data = this.loadData();
      const deletedTodos: Todo[] = [];
      data.todos = data.todos.reduce( (remaining, t) => {
        t.completed ? deletedTodos.push(t) : remaining.push(t);
        return remaining;
      }, []);
      this.saveData(data);
      resolve(deletedTodos);
    });
  }

  private loadData(): { todos: Todo[], lastId: number } {
    if (localStorage.getItem('todos') === null) {
      return { todos: [], lastId: 0};
    } else {
      return {
        todos: JSON.parse(localStorage['todos']),
        lastId: JSON.parse(localStorage['lastId'])
      };
    }
  }

  private saveData(data: { todos, lastId }) {
    localStorage['todos'] = JSON.stringify(data.todos);
    localStorage['lastId'] = data.lastId;
  }
}
