import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { State } from '../model/state';

@Component({
  selector: 'todos-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  // Properties to render in template
  public authorName = 'Micha Alt';
  public authorUrl = 'https://lean-stack.de';

  public state: State;

  // Methods to trigger from template
  doNotNavigate(ev: MouseEvent) {
    ev.preventDefault();
    return false;
  }

  constructor() { }

  ngOnInit() {
    this.state = new State();
    this.state.todos = [
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
}
