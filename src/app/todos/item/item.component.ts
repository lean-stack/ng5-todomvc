import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { Todo } from '../model/todo';
import { StateService } from '../service/state.service';

@Component({
  selector: 'todos-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  // Properties to render
  @Input()
  public todo: Todo;

  public editMode = false;
  public editText: string;

  @ViewChild('txtField')
  public txtField: any;

  // Events
  @Output()
  public remove = new EventEmitter<Todo>();

  constructor(private stateService: StateService) {
  }

  ngOnInit() {
    this.editText = this.todo.title;
    console.log(this.txtField);
  }

  deleteItem() {
    // Hm, what now? Delete myself??
    // Todo: notify someone ...
    this.remove.emit(this.todo);
  }
  toggleItemState() {
    // Todo: notify someone ...
    this.stateService.update(this.todo);
  }

  enterEditMode() {
    this.editMode = true;
    // setTimeout( () => {
    //   this.txtField.nativeElement.focus();
    // }, 0);

  }

  commitEdit() {
    this.editMode = false;
    this.todo.title = this.editText;
    // Todo: notify someone ...
    this.stateService.update(this.todo);
  }

  cancelEdit() {
    this.editMode = false;
    this.editText = this.todo.title;
  }

}
