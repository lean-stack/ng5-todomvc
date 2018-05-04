import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { State } from '../model/state';
import { StateService } from '../service/state.service';

@Component({
  selector: 'todos-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  // Properties to render in template
  public authorName = 'Micha Alt';
  public authorUrl = 'https://lean-stack.de';

  public state: State = new State();

  private lastId = 0;

  // Methods to trigger from template
  doNotNavigate(ev: MouseEvent) {
    ev.preventDefault();
    return false;
  }

  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.stateService.state.subscribe( state => {
        this.state = state;
    });
  }

  createTodo(title: string) {
    this.stateService.create(title);
  }
}
