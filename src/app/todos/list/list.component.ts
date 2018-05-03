import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'todos-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  public todos: Todo[];

  constructor() { }

  ngOnInit() {
  }

  removeTodo(todo: Todo) {
    const ix = this.todos.indexOf(todo);
    this.todos.splice(ix, 1);
  }
}
