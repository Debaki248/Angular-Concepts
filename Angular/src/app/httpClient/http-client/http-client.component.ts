import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {
  Root_Url = " https://jsonplaceholder.typicode.com/";
  posts:any;
  messages:any;
  constructor(private https:HttpClient) { }

  ngOnInit(): void {
  }
  getPosts() {
    this.posts = this.https.get(this.Root_Url + "posts/?userid=1");
  }
  message(){
    let head = new HttpHeaders().set('Authorization','auth-token');
    this.messages = this.https.get(this.Root_Url + "posts/?userid=1");
  }

}
