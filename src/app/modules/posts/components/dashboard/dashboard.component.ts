import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Posts } from '../../models/posts.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  posts: any;
  constructor(private postService: ServiceService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data as Posts[];
      
    })
  }
} 
