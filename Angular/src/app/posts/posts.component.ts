import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = [];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    const eventValues = localStorage.getItem('eventValue'|| 'en');

   /* const headers = new HttpHeaders({
      'Accept-Language':eventValues
    }); */

    this.http.get('https://jsonplaceholder.typicode.com/posts/?userid=1', {

    })

  }
 

}
