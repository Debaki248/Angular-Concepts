import { Component, OnInit } from '@angular/core';
import {EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeINfoComponent implements OnInit {
  infoServiceOne:string[]=[];
  infoServiceTwo:string[]=[];
  infoServiceThree:string[]=[];
  getInfoServiceOne() {
    this.infoServiceOne = this.serviceOne.getInfo();
  }
  getInfoServiceTwo() {
    this.infoServiceTwo = this.serviceOne.getInfoOne();
  }
  getInfoServiceThree() {
    this.infoServiceThree = this.serviceOne.getInfoTwo();
  }
  constructor(private serviceOne:EmployeeService) { 

  }

  ngOnInit(): void {
  }

}
