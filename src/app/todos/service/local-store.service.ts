import { Injectable } from '@angular/core';
import { StoreService } from './store-service';
import { Todo } from '../model/todo';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LocalStoreService extends StoreService {

  async getAll(): Promise<Todo[]> {
    return this.loadData().todos;  // implicitly promisified
  }
  async create(title: string): Promise<Todo> {
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

  async update(todo: Todo): Promise<Todo> {
    return new Promise<Todo>( (resolve, reject) => {
      const data = this.loadData();
      const todoIndex = data.todos.findIndex( t => t.id === todo.id);
      data.todos[todoIndex] = todo;
      this.saveData(data);
      resolve(todo);
    });
  }
  async remove(id: number): Promise<Todo> {
    return new Promise<Todo>( (resolve, reject) => {
      const data = this.loadData();
      const todoIndex = data.todos.findIndex( t => t.id === id);
      const deletedTodos = data.todos.splice(todoIndex, 1);
      this.saveData(data);
      resolve(deletedTodos[0]);
    });
  }

  async clearCompleted(): Promise<Todo[]> {
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

  // History of JavaScript asynchron
  getAllSync(): Todo[] {
    // return JSON.parse(localStorage['todos']);
    return this.loadData().todos;
  }

  // ES 5
  getAllCallback(cb): void {
    setTimeout(() => {
      const todos = this.loadData().todos;
      cb(todos);
    }, 5000);
  }
  // ES 6, ES 2015
  getAllPromise(): Promise<Todo[]> {
    return new Promise<Todo[]>( (resolve, reject) => {
      resolve(this.loadData().todos);
    });
  }
  // ES 8, ES 2017
  async getAllAsync(): Promise<Todo[]> {
    return new Promise<Todo[]>( (resolve, reject) => {
      resolve(this.loadData().todos);
    });
  }
  // RxJS
  getAllRx(): Observable<Todo[]> {
    // const todos$ = new BehaviorSubject<Todo[]>(
    //   this.loadData().todos
    // );
    const todos$ = new Subject<Todo[]>();
    setTimeout( () => {
      todos$.next(this.loadData().todos);
    }, 1000);
    return todos$.asObservable();
  }
  getAllKonsument() {
    this.getAllRx().subscribe( todos => {});
  }
}
