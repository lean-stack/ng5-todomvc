import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'todos-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  // Properties to render
  public todo: Todo;
  public editMode = false;
  public editText: string;

  constructor() { }

  ngOnInit() {
    this.todo = {
      id: 1,
      title: 'Bindings',
      completed: false
    };
    this.editText = this.todo.title;
  }

  deleteItem() {
    // Hm, what now? Delete myself??
    // Todo: notify someone ...
    console.log('Deleting');
  }
  toggleItemState() {
    // Todo: notify someone ...
    console.log('Toggling state');
  }

  enterEditMode() {
    this.editMode = true;
  }

  commitEdit() {
    this.editMode = false;
    this.todo.title = this.editText;
    // Todo: notify someone ...
  }

  cancelEdit() {
    this.editMode = false;
    this.editText = this.todo.title;
  }

}
