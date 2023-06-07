import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-newchild',
  templateUrl: './newchild.component.html',
  styleUrls: ['./newchild.component.css']
})
export class NewchildComponent implements OnInit {
  @Output() parentFunction:EventEmitter<any> = new EventEmitter();
  @Output() newParentFunction: EventEmitter<any> = new EventEmitter();
  @Output() updatedParent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    
  }
  sendData() {
    let data={name:'anil',age:26};
    this.parentFunction.emit('anil');
  }
  sendNewData() {
   this.newParentFunction.emit('Debaki');
  }
  sendParent() {
    this.updatedParent.emit('Pinu');
  }


}
