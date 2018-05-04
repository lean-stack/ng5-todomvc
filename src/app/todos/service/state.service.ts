import { Injectable } from '@angular/core';
import { LocalStoreService } from './local-store.service';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { State } from '../model/state';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../model/todo';

@Injectable()
export class StateService {

  private _state: State;
  private state$: ReplaySubject<State>;

  constructor(private store: LocalStoreService) {
    this.state$ = new ReplaySubject(1);

    this._state = new State();
    store.getAll().then( (todos) => {
      this._state.todos = todos;
      this.state$.next(this._state);
    });
  }

  get state(): Observable<State> {
    return this.state$.asObservable();
  }

  async create(title: string) {
    const todo = await this.store.create(title);
    this._state.todos.push(todo);
  }

  async update(todo: Todo) {
    const updatedTodo = await this.store.update(todo);
    const ix = this._state.todos.findIndex( t => t.id === updatedTodo.id);
    this._state.todos[ix] = updatedTodo;
  }

  async remove(id: number) {
    const deletedTodo = await this.store.remove(id);
    const ix = this._state.todos.findIndex( t => t.id === id);
    this._state.todos.slice(ix, 1);
  }

  async clearCompleted() {
    const deletedTodos = await this.store.clearCompleted();
    deletedTodos.forEach( (todo) => {
      const ix = this._state.todos.findIndex( t => t.id === todo.id);
      this._state.todos.slice(ix, 1);
    });
  }
}
