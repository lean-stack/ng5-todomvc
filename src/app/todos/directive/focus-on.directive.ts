import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[focusOn]'
})
export class FocusOnDirective implements OnChanges {

  @Input()
  public focusOn: boolean;

  constructor(private elt: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.focusOn) {
      this.elt.nativeElement.focus();
    }
  }

}
