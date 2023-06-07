import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-view-child-and-view-children',
  templateUrl: './view-child-and-view-children.component.html',
  styleUrls: ['./view-child-and-view-children.component.css']
})
export class ViewChildAndViewChildrenComponent implements OnInit,AfterViewInit {
  @ViewChild('serverContentInput') serverContentInput:ElementRef | undefined;
  constructor() { 
      }

  ngOnInit(): void {
  }

 
  ngAfterViewInit() {
    
  }
  increment() {
    
  }
  decrement() {
    
  }
}
