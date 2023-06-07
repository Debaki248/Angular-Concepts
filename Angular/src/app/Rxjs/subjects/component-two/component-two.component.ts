import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {

  constructor(private dataService: MasterService) { }

  ngOnInit(): void {
  }
  onButtonClick(data:any){
    console.log("inside onbuttonClick()");
    console.log("Value = ",data.value);
    this.dataService.getNotification(data.value);
  }

}
