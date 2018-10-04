import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostInterface } from '../../models/post';
import { PostService } from '../../../services/post.service';
import { AuthService } from '../../../services/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
idPost: string;
idUserLog: string;
isOwner: boolean = false;//??

post: PostInterface = {
  id:'',
  description:'',
  date:'',
  userId:'',
  userName:''
}
  constructor(
    private postService: PostService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  onCheckUserLogin(){
    this.authService.getAuth().subscribe(user => {
      if(user){
        this.idUserLog = user.uid;
      }
    })
  }

}
