import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-template-forms',
  templateUrl: './new-template-forms.component.html',
  styleUrls: ['./new-template-forms.component.css']
})
export class NewTemplateFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    onChange(data:any) {
      console.log("name = ",data.name+" password = ",data.password);

    }
}
