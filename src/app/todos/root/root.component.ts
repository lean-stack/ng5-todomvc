import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'todos-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  // Properties to render in template
  public authorName = 'Micha Alt';
  public authorUrl = 'https://lean-stack.de';

  // Methods to trigger from template
  doNotNavigate(ev: MouseEvent) {
    ev.preventDefault();
    return false;
  }

  constructor() { }

  ngOnInit() {
  }
}
