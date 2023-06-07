import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-component',
  templateUrl: './observable-component.component.html',
  styleUrls: ['./observable-component.component.css']
})
export class ObservableComponentComponent implements OnInit {
  agents:Observable<string> | undefined;
  brokers:Observable<string> | undefined;
  agentName:string | undefined;
  constructor() { }

  ngOnInit(): void {
    this.agents = new Observable(
      function(observer){
        try{
          observer.next('hhhh');
          observer.next('ssc');
          observer.next('cdsc');
        }catch(e){
            observer.error(e);
      }

      }
    );
    this.agents.subscribe(data => {
      console.log(data);
    })

    this.brokers = new Observable(
      function(observer) {
        try{
          observer.next('Ram');
          setInterval(() =>{
            observer.next('Sam');
          },8000)
          setInterval(() => {
            observer.next('Hari');
          },8000)
          
        }catch(e){
          observer.error(e);
        }
      }
    );
    this.brokers.subscribe(data => {
      this.agentName = data;
    })
  }

}
