import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { PostInterface } from '../../models/Post';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
posts: PostInterface[];
idPost: string;
idUserLog: string;
//isOwner: boolean = false;//propiedad para saber si el usuario es el dueño del mensaje

post: PostInterface = {
  id:'',
  description:'',
  date:'',
  userId:'',
  userName:''
}
  constructor(
    public postService: PostService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.allPost();
    this.onCheckUserLogin();
    this.getDetailsPost();
  }

  allPost(){//trae todos los post
    this.postService.getAllPosts().subscribe(posts => this.posts = posts);
  }

  onCheckUserLogin(){//Autentifica que esté logueado el usuario
  this.authService.getAuth().subscribe(user => {
    if(user){
      this.idUserLog = user.uid;
    }
  })
}

 getDetailsPost(){//Trae el id del usuario logueado y lo compara con el id del usuario que hizo el comentario
  this.idPost = this.route.snapshot.params['id'];
  this.postService.getOnePost(this.idPost).subscribe(post => {
    this.post = post;
  });
}

onClickDelete(){//Elimina el comentario preguntando antes para confirmar
  if(confirm('Estás seguro?')){
     this.postService.deletePost(this.post);
  }
}
}