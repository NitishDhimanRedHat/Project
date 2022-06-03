import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/user/services/user.service';
import {User} from '../../models/user.model'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any;

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getTableData()
  }

  getTableData() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data as User[];
    })
  }
  getDetails(id: any) {
    this.router.navigate(['users/user-details', id])
  }





}
