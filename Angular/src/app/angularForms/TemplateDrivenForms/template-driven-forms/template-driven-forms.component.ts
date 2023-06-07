import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
  //Reactive Forms
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  templateDriven = new FormGroup({
    userName:new FormControl(),
    password: new FormControl()
  });

  loginUser() {
    console.log(this.templateDriven.value);
  }

  newForm = new FormGroup({
    newUserName : new FormControl('pppp'),
    newUserPassword: new FormControl('cndjcbd')
  })

  onChange() {
    console.log(this.newForm.value);
  }

}
