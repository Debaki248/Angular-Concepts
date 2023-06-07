import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {
  enteredText:string;
  newEnteredText:string;
  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
  }
  onButtonClick() {
    console.log(this.enteredText);
    this.dataService.raiseDataEmitterEvent(this.enteredText);
  }
  secondButtonClick() {
    this.dataService.raiseData(this.newEnteredText);
  }




}
