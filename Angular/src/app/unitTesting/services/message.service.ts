import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
 message:String;
  constructor() { }

  messagePassed(name:String,password:String){
    return this.message = name ;
  }
}
