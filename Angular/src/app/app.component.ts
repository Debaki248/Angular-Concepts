import { AfterViewInit, Component, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { DataService } from './data.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DataServiceService } from './Rxjs/subjects/data-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [DataService]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('header')
  child!: ElementRef;
  constructor(private dataService:DataServiceService) {
   
  }
  ngAfterViewInit(): void {
    console.log(this.child);    
  }
}

