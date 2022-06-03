import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { PostsModule } from '../posts.module';


@Injectable({
  providedIn: 'root'
})
export class ServiceService{

  posts: any;
  url: any = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url+'/posts');
  }

}
