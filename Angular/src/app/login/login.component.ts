import { Component, OnInit } from '@angular/core';
import { FormControlName } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
proceedLogin(name:any) {
  localStorage.setItem("username",name);
  this.router.navigate([""]);
}
proceed: any;

  constructor(private router:Router) { 

  }

  ngOnInit(): void {
  }

}
