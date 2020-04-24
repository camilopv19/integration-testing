import { Directive, OnChanges, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnChanges{
  defaultColor =  'yellow'; 
  @Input('highlight') bgColor: string;    //Has the same name as the selector for the 2way data binding

  constructor(private el: ElementRef) {
  }

  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor = this.bgColor || this.defaultColor;
  }
}
