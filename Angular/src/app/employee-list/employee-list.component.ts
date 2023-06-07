import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee: any;

  
  constructor(private _employeeService: EmployeeServiceService) { 
      const employee = [];
    }

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(data => this.employee = data);
  }

}
