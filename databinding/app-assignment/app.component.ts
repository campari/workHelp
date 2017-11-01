import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timer: number;
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onSetTimer(timer){
    this.timer = timer.timer;
    if(this.timer % 2 == 0){
      this.oddNumbers.push(this.timer);
    }else{
      this.evenNumbers.push(this.timer);
    }
  }

}
