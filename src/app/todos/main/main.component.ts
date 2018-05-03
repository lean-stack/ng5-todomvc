import { Component, OnInit, Input } from '@angular/core';
import { State } from '../model/state';

@Component({
  selector: 'todos-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input()
  public state: State;

  constructor() { }

  ngOnInit() {
  }

}
