import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-parent',
  templateUrl: './new-parent.component.html',
  styleUrls: ['./new-parent.component.css']
})
export class NewParentComponent implements OnInit {
  title="blog";
  constructor() { }

  ngOnInit(): void {
  }
  parentFunction(data: any) {
    console.log(data);
  }
  newParentFunction(data:any) {
    console.log("inside newParentFunction()");
    console.log(data);
  }
  updatedParent(data:any) {
    console.log("inside updatedparent()");
    console.log(data);
  }

}
