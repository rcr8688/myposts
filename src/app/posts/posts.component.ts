import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Posts } from '../posts.model'
import { NgForm } from '@angular/forms';
import {PostsService} from '../posts.service'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postserv:PostsService ) { }

  title: any
  content: any
  // @Output() postcontent = new EventEmitter<Posts>()
  ngOnInit() {
  }
  onsavedata(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postserv.addposts(form.value.title,form.value.content)
    form.resetForm()
    // var post: Posts = {
    //   title: form.value.title,
    //   content: form.value.content
    // }
    // this.postcontent.emit(post)
  }

}
