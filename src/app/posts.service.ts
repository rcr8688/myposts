import { Injectable } from '@angular/core';
import { Posts } from './posts.model'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Posts[] = []
  private passdat = new Subject()

  getposts() {
    return this.posts
  }
  pasdatobsl() {
    return this.passdat.asObservable()
  }



  addposts(title: string, content) {
    const post: Posts = {
      title: title, content: content
    }
    this.posts.push(post)
    this.passdat.next([...this.posts])
  }

  constructor() { }
}
