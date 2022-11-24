import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from '../interfaces/post.interface';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public baseURL: string = `https://jsonplaceholder.typicode.com`;

  constructor(public http: HttpClient) { }

  ngOnInit(){
    this.getUsers();
    this.getPosts(); 
  }
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/users`).pipe(
      map((users: User[]) => {
        console.log(users)
        return users;
      })
    )
  }
  
  public getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.baseURL}/posts`).pipe(
      map((posts: Post[]) => {
        return posts; 
      })
    )
  }

}
