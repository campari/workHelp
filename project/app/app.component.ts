import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'app';
  loadedFeature : string = 'recipe';
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDlP5icM2PTqU_hUIxmfkP0hXMOMJn2yLc",
      authDomain: "udemy-ng-http-a0309.firebaseapp.com"
    });
  }
}
