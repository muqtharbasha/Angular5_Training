import { Directive, ElementRef, Renderer2, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  
  // to bind the HTML property
  @HostBinding('style.backgroundColor') bgColor;
  @HostBinding('class') name;
  
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    // console.log('directive')
    console.log(elRef.nativeElement);

  }

  // to bind the HTML events
  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouse entered on: ' + this.elRef.nativeElement.textContent);
    this.bgColor = 'lightBlue';
    this.name = 'bold';
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('mouse left from: ' + this.elRef.nativeElement.textContent);
    this.bgColor = 'lightGreen';
    this.name = 'normal';
  }

  ngOnInit() {
    // const textNode = document.createTextNode('This is my name');
    // this.renderer.appendChild(this.elRef.nativeElement, textNode);

    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');

    this.bgColor = 'lightGreen';
    this.name = 'normal';
  }

}
