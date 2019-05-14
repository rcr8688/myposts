import { Component, OnInit, Input } from '@angular/core';
import {Posts} from '../posts.model'
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  // @Input() posts:Posts[]=[
    // { title: 'firstname', content: 'this is first content' },
    // { title: 'secondname', content: 'this is secondname content' },
    // { title: 'thirdname', content: 'this is thirdname content' },
    // { title: 'fourthname', content: 'this is fourthname content' },
    // { title: 'fifthname', content: 'this is fifthname content' },

  // ]


  posts:Posts[]=[]


  constructor(private postservice:PostsService ) { }

  ngOnInit() {
   this.postservice.pasdatobsl().subscribe((dat:Posts[])=>{
  this.posts=dat  
  })
  }
  

}
