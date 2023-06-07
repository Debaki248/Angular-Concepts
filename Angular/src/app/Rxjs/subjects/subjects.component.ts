import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DataServiceService } from './data-service.service';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  inputText:string;
  newInputText:string;
  updatedText:string;
  constructor(private dataService:DataServiceService,private masterService:MasterService) { }

  ngOnInit(): void {
    this.dataService.dataEmit.subscribe((value:string)=> {
        this.inputText = value;
    })
    this.dataService.dataEmission.subscribe((value:string)=> {
      this.newInputText = value;
    })
    this.masterService.newSubject.subscribe((value:string)=>  {
      this.updatedText = value;
    })
  }
  }
