import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { Observer } from "rxjs/Observer";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersOpsSubscrition: Subscription;
  customSubscrition: Subscription;
  ngOnDestroy() {
    this.numbersOpsSubscrition.unsubscribe();
    this.customSubscrition.unsubscribe();
  }

  constructor() { }

  ngOnInit() {
      const myNumbers = Observable.interval(1000)
      .map(
        (data: number) => {return data * 2;}
      );
      this.numbersOpsSubscrition = myNumbers.subscribe(
        (number: number) => { console.log(number);} 
       );

    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(
        () => {
          observer.next('first package')
        }  ,2000
        );
        setTimeout(
          () => {
            observer.next('second package')
          }  ,4000
          );
          setTimeout(
            () => {
              //observer.next('this doesnt not work')
              observer.complete();
            }  ,5000
            );

            setTimeout(
              () => {
                observer.next('third package');

              }  ,6000
              );
      }
    );


    this.customSubscrition = myObservable.subscribe(
      (data: string) => {console.log(data);},
      (error: string) => {console.log(error);},
      () => {console.log('done');},
     );

  }

}
