import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  loginForm= new FormGroup({
    email: new FormControl('ddscsd'),
    password:new FormControl('fsdccsdc')
  })
  newLoginForm = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })
  constructor() { }

  ngOnInit(): void {
  }
  sendMessage() {
    console.log("form values",this.loginForm.value.email);
  }

}
