import { Directive, HostListener, OnInit, Renderer2, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit  {
  @Input() defaultColor = 'transparent';
  @Input('appBetterHighlight') highlightColor = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  ngOnInit() {
   // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
   this.backgroundColor = this.defaultColor;
   console.log(this);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseover
  (eventData : Event) {
   // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
   this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave
  (eventData : Event) {
    //this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
