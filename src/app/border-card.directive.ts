import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) { 
    this.setHeight(180)
    this.setBorder('#F5F5F5')
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder("#009688");
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`; 
  }
}
