import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  dataEmit = new Subject<String>()
  constructor() { }
  raiseDataEmitterEvent(data:string) {
    this.dataEmit.next(data);
  }
  
  dataEmission =  new Subject<string>();
  raiseData(data:string) {
    this.dataEmission.next(data)
  }
}
