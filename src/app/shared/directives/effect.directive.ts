import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEffect]'
})
export class EffectDirective {

  private appliedEffect = false;

  @Input('appEffect') classNames: Array<string>;
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  @HostListener('click') onClick() {
    console.log('click');
    if(this.appliedEffect){
      this.classNames.forEach(name => this.renderer2.removeClass(this.elementRef.nativeElement, name));
    } else {
      this.classNames.forEach(name => this.renderer2.addClass(this.elementRef.nativeElement, name));
    }
    this.updateStatusEffect();
  }

  private updateStatusEffect() {
    this.appliedEffect = !this.appliedEffect;
  }
}
