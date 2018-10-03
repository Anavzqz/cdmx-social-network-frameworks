import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { PostInterface } from '../../models/Post';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
posts: PostInterface[];

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.allPost();
  }

  allPost(){
    this.postService.getAllPosts().subscribe(posts => this.posts = posts);
  }
}
