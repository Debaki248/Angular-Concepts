import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-spies-mockies',
  templateUrl: './spies-mockies.component.html',
  styleUrls: ['./spies-mockies.component.css']
})
export class SpiesMockiesComponent implements OnInit {
  updatedName:String;
  constructor(private messageService:MessageService) { }

  ngOnInit(): void {
  }
  sendMessage(data:any) {
    this.updatedName=this.messageService.messagePassed(data.userName,data.password);
    console.log("updatedname = ",this.updatedName);
  }
}
