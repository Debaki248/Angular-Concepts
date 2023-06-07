import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})
export class ContentProjectionComponent implements OnInit {
  @Input() products: any;
  @Input() buyProducts: any;
   constructor() { }

  ngOnInit(): void {
  }
  sendMessage() {
    console.log(this.products);
  }

}
