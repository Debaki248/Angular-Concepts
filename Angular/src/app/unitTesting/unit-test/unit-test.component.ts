import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-test',
  templateUrl: './unit-test.component.html',
  styleUrls: ['./unit-test.component.css']
})
export class UnitTestComponent implements OnInit {
  appName="general";
  constructor() { }

  ngOnInit(): void {
  }

}
