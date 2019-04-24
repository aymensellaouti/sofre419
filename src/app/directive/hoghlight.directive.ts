import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoghlight]'
})
export class HoghlightDirective {
  @Input() inColor = 'yellow';
  @Input() outColor = 'red';
  @HostBinding('style.backgroundColor') bgColor = 'red';
  constructor() { }
  @HostListener('mouseenter') changeToYellow() {
    this.bgColor = this.inColor;
  }
  @HostListener('mouseleave') changeToRed() {
    this.bgColor = this.outColor;
  }

}
