import { Component, OnInit, Input } from '@angular/core';
import { State } from '../model/state';
import { StateService } from '../service/state.service';

@Component({
  selector: 'todos-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input()
  public state: State;

  constructor(private stateService: StateService) { }

  ngOnInit() {
  }

  clearCompleted() {
    this.stateService.clearCompleted();
  }
}
