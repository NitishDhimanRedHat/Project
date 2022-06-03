import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: any = 'https://jsonplaceholder.typicode.com'

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.url+'/users');
  }

  getSingleUser(id: any) {
    return this.http.get(`${this.url}/users/${id}`)
  }
}
