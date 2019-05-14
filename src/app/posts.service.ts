import { Injectable } from '@angular/core';
import { Posts } from './posts.model'

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Posts[] = []

  getposts() {
    return this.posts
  }

  addposts(title: string, content) {
    const post: Posts = {
      title: title, content: content
    }
    this.posts.push(post)
  }

  constructor() { }
}
