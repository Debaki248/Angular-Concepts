import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit,OnDestroy {
  private mySubscription:Subscription;
  private myNewSubscription:Subscription;
  constructor() { }

  ngOnInit(): void {
    //promise
    const promisereq = new Promise((resolve) => {
        console.log("inside promise");
        setTimeout(() =>{
          resolve("Ram");
          resolve("sam");
          resolve("hari")
        },1000)
    })
    promisereq.then(req => console.log(req));


    //observable
    const obs = new Observable((subs) => {
      console.log("inside observable");
      setTimeout(() => {
        subs.next("first observable call");
        subs.next("Second Observable call");
        subs.next("Third Observable call");
      }, 1000);
    });
    obs.pipe(
      filter(res => res === "first observable call")
    ).subscribe(result => console.log("first observble match"));

    obs.pipe(
      filter(result => result === "Second Observable call")
    ).subscribe(req => console.log("second Observable match"));

    const observe = new  Observable((subs) => {
      console.log("new Observable");
      let count = 0;
      setInterval(() => {
        count = count+1;
        subs.next(count);
      },1000) 
    })
  
    this.mySubscription = observe.subscribe(result => console.log(" subscriber count ",result));


    const newObservable = new Observable((newSubs) => {
      let count = 0;
      setInterval(() => {
          count = count + 1;
          newSubs.next(count)
      })

    });
    this.myNewSubscription = newObservable.subscribe(result => console.log("result = ",result));

  }
 
  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
    this.myNewSubscription.unsubscribe();
  }

}


