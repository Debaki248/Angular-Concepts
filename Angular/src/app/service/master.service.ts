import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  newSubject = new BehaviorSubject<string>('Behaviour subject');
  constructor() { 
    
  }

  isLoggedIn() {
    return localStorage.getItem("username")!=null;

  }
  getNotification(data) {
    this.newSubject.next(data);
  }
}
