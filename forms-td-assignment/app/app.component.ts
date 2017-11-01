import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.defaultSubsciption =  this.subscriptions[1]; 
  }
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubsciption: string = '';
    
    @ViewChild('f') form: NgForm;


    onSubmit(f){
      console.log(f.form.value);
    }
}
