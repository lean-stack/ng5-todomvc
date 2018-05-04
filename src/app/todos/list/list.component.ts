import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../model/todo';
import { StateService } from '../service/state.service';

@Component({
  selector: 'todos-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  public todos: Todo[];

  constructor(private stateService: StateService) { }

  ngOnInit() {
  }

  removeTodo(todo: Todo) {
    this.stateService.remove(todo.id);
  }
}
