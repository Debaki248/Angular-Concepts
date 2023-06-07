import { Component, OnInit,NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  enterName = "Lewis";
  parentData = "";
  value = "";
  newValue="";
  constructor() { }

  ngOnInit(): void {
  }
  passData() {
    this.parentData = this.enterName;
    console.log("parentData",this.parentData);
  }
  sendData(value: any) {
    this.value = value;
    console.log(this.value);
  }
  sendNewData() {
    console.log("inside  sendNewData()");
    this.newValue = "Present Data";
  }

}
