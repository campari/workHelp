import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public counter = [];

  addClick(){
    console.log('addClick');
    let number = this.counter.length + 1;
    this.counter.push(new Date());
  }

  getColor(id){
    return  id > 4 ? 'blue': false ;
  }

  getClass(id){
    return id > 4 ? true: false ;
  }
}
