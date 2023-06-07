import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  value:string = "veerfree";
  onSend(){
    console.log("frefgregreg");
  }
  image:string ="/assets/Images/download.jpg"
}
