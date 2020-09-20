import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight: string;
  @HostBinding('style.background-color') backgroundColor: string;
  constructor() { }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('enter');
    this.backgroundColor = this.appHighlight;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = null;
  }
}
