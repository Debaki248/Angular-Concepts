import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  constructor(private departmentService:DepartmentService) { }

  ngOnInit(): void {
  }

  sendData() {
    this.departmentService.getDepartments();
  }

}
