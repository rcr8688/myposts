import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }
title:any
content:any
 @Output() postcontent=new EventEmitter()
  ngOnInit() {
  }
  onsavedata(){
var post={
title:this.title,
content:this.content
}
this.postcontent.emit(post)
  }

}
