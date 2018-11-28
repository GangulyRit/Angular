import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer } from "rxjs";
import "rxjs/Rx";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numberObsSubscription;
  customObsSubscription;
  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    this.numberObsSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('firstPackage');
      }, 2000);
      setTimeout(() => {
        observer.next('secondPackage');
      }, 4000);
      setTimeout(() => {
        //observer.error('This does not work');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('thirdPackage');
      }, 6000);
    });

    this.customObsSubscription = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('Completed');
      }
    );
  }

  ngOnDestroy() {
    this.numberObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }

}
