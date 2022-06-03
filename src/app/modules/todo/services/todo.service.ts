import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos!: Todo[];
  url: any = 'https://jsonplaceholder.typicode.com'
  
  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get(this.url+'/todos');
  }
}
