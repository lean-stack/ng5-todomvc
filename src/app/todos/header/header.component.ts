import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public textTodo: string;

  @Output()
  public create = new EventEmitter<string>();

  createTodo() {
    if (this.textTodo.trim().length > 0) {
      this.create.emit(this.textTodo);
      this.textTodo = '';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
