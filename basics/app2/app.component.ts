import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public username: string = '';

  amIEmpty(){
    return this.username == '' ? true : false;
  }
  
  setEmpty(){
    console.log('ahoj');
    this.username = '';
  }
}
