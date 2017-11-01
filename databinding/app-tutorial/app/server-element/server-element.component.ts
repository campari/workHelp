import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  ngOnDestroy(): void {
    console.log('onDestroy called!');
  }


  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
  }

  ngDoCheck(): void {
    console.log('doCheck called!');
  }
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngChanges called!');
    console.log(changes);
  }

  
  constructor() { 
    console.log('constructor called!');
  }


  ngOnInit() {
    console.log('on init called!');
  }

  

}
