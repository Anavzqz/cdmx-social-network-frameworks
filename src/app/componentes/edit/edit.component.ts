import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostInterface } from '../../models/post';
import { PostService } from '../../../services/post.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
idPost: string;
post: PostInterface = {
  id: '',
  description: '',
  date: '',
  userId: '',
  userName: ''
}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit() {
   this.getEditPost();
  }

  getEditPost(){
    this.idPost = this.route.snapshot.params['id'];
    this.postService.getOnePost(this.idPost).subscribe(post => this.post = post);
  }

  onEditPost({value}:{value:PostInterface}){
    value.id = this.idPost;
    this.postService.updatePost(value);
    this.router.navigate(['/timeline/'+this.idPost]);
  }
}
