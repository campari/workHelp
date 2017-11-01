import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  public timer: number = 0;
  public runnable;
  @Output() timerEmit = new EventEmitter<{timer: number}>();
  constructor() { }

  ngOnInit() {
  }

  start(){
    this.runnable = setInterval(() => { this.timer++; this.timerEmit.emit({timer: this.timer});}, 1000);

  }

  stop(){
    clearInterval(this.runnable);
  }



}
