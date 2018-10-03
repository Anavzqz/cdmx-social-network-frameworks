import { Component, OnInit } from '@angular/core';
import { PostInterface } from '../../models/Post';
import { AuthService } from '../../../services/auth.service';
import { PostService } from '../../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
post : PostInterface = {
  id: '',
  description: '',
  date: '',
  userId: '',
  userName: ''
}
  constructor(
    private authService: AuthService,
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSavePost({value}: {value: PostInterface}) {
    value.date = (new Date()).getTime();
    this.authService.getAuth().subscribe( user => {
      value.userId = user.uid;
      value.userName = user.displayName;
      this.postService.addNewPost(value);
    });
    //this.router.navigate(['/']);
  }
}
