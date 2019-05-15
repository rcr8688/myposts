import { Injectable } from '@angular/core';
import { Posts } from './posts.model'
import { HttpClient } from '@angular/common/http'
import { Observable, Subject,BehaviorSubject } from 'rxjs'
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsurl = 'http://127.0.0.1:3030/'
  private postupdate = new BehaviorSubject<any>('');
datpost:any[]=[]
  constructor(private htpclint: HttpClient) { }

  getupdatelistener() {
    return this.postupdate.asObservable();
  }


  getposts() {
   this.htpclint.get<{message:string;pts:Posts[]}>(this.postsurl).subscribe(postdt => {
     this.datpost=postdt.pts
    this.postupdate.next([...this.datpost])
  })   
  }


  addposts(title: string, content: string) {
    const post1: Posts = {
      id: null, title: title, content: content
    }
    this.htpclint.post(this.postsurl, post1).subscribe(data => {
      // console.log(data);
      this.datpost.push(data)
      this.postupdate.next(this.datpost)
    })
  }

  deleteposts(postid) {
    this.htpclint.delete(this.postsurl + postid).subscribe(
      dat => {
        console.log("successfully delete");

      }
    )
  }

}
