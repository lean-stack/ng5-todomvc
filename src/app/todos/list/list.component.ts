import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'todos-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public todos: Todo[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: 'TypeScript',
        completed: true
      },
      {
        id: 2,
        title: 'Bindings',
        completed: false
      }
    ];
  }

  removeTodo(todo: Todo) {
    const ix = this.todos.indexOf(todo);
    this.todos.splice(ix, 1);
  }
}
