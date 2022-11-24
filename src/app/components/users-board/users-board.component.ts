import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Post } from 'src/app/interfaces/post.interface';
import { User } from 'src/app/interfaces/user.interface';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-users-board',
  templateUrl: './users-board.component.html',
  styleUrls: ['./users-board.component.css']
})
export class UsersBoardComponent implements OnInit {
  public users: User[] = [];
  public posts: Post[] = [];
  public userPosts = [];

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.initUserData(); 
    this.initPostsData(); 
    this.getInitials('user name'); 
  }

  initUserData(){
    this.service.getUsers().subscribe( users => {
      this.users = users; 
    })
  }

  initPostsData(){
    this.service.getPosts().pipe().subscribe( posts => {
      this.posts = posts; 
    })
  }
/*
  initPostByUser(){
    let userPost = this.users.map( user => {
      return this.posts.filter( post => post.userId === user.id); 
    })
  } */

  getInitials( name: string): string{
    return name.split(" ").map((n)=>n[0]).join(" ");
  }


}

  

