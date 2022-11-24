import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { User } from 'src/app/interfaces/user.interface';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  @Input() public userId!: number; 
  @Input() public users!: User[];
  @Input() public postId!: number; 
  public posts: Post[] = []; 
  public userPosts: Post[] = [];

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.initFilteredPosts();
  }

  initFilteredPosts() {
    this.service.getPosts().subscribe(res => {
      this.posts = res;
      this.userPosts = this.posts.filter(post => post.userId == this.userId && post.id == this.postId) ;
      console.log(this.userPosts)
    }
    )
  }

  

}
