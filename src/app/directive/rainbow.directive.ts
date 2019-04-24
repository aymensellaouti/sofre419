import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  constructor() { }
  @HostBinding('style.borderColor') bc;
  @HostBinding('style.color') color;
  @HostListener('keyup') changeColor() {
    this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.bc = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

}
