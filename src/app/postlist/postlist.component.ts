import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Posts } from '../posts.model'
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';
// import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit, OnDestroy {

  // @Input() posts:Posts[]=[
  // { title: 'firstname', content: 'this is first content' },
  // { title: 'secondname', content: 'this is secondname content' },
  // { title: 'thirdname', content: 'this is thirdname content' },
  // { title: 'fourthname', content: 'this is fourthname content' },
  // { title: 'fifthname', content: 'this is fifthname content' },

  // ]


  posts: any[]=[]
  postsubs: Subscription

  constructor(private postservice: PostsService) { }

  ngOnInit() {
    this.postservice.getposts()
    this.postservice.getupdatelistener().subscribe(posts => {
      console.log(posts);
    this.posts=posts
    })
  }

  deleteposts(postid: string) {
    this.postservice.deleteposts(postid)
  }
  ngOnDestroy() {
    // this.postsubs.unsubscribe()
  }

}
