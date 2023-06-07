import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updated-component',
  templateUrl: './updated-component.component.html',
  styleUrls: ['./updated-component.component.css']
})
export class UpdatedComponentComponent implements OnInit {
  salesProducts = [
    {id:1,name:"sf",price:"444"},
    {id:2,name:"wsd",price:"111"}
  ];
  buyProducts = [
    {id:1,name:"ram",price:"4444"},
    {id:2,name:"Sam",price:"55555"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
