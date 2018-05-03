import { Todo } from './todo';

export class State {

  public todos: Todo[] = [];

  get hasTodos(): boolean {
    return this.todos.length > 0;
  }

  get allCompleted(): boolean {
    return this.todos.findIndex( t => !t.completed ) === -1;
  }

  get activeCount(): number {
    return this.todos.reduce( (count, t) => {
      if (!t.completed) { ++count; }
      return count;
    }, 0);
  }

  get hasCompleted(): boolean {
    return this.todos.findIndex( t => t.completed ) !== -1;
  }
}
