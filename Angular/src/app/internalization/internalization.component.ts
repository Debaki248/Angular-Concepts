import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internalization',
  templateUrl: './internalization.component.html',
  styleUrls: ['./internalization.component.css']
})
export class InternalizationComponent implements OnInit {
  eventValue:any;
  constructor() { }

  ngOnInit(): void {
    this.eventValue = localStorage.getItem('eventValue' || 'en');
  }
  changeLang(data:any) {
    console.log("inside changelang");
    this.eventValue=data.target.value;
    console.log("event value",this.eventValue);
    localStorage.setItem('lang',this.eventValue);
    window.location.reload();
  }

}
