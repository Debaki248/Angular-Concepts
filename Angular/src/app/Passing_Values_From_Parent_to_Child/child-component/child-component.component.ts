import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  
  @Input()
  parentData: string | undefined;
  @Input() newValue:string;
  @Output() public sendData = new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
    this.sendData.emit("Child");
  }

}
