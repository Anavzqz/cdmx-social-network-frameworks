import { Injectable } from '@angular/core';
import { PostInterface } from '../app/models/post';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postCollection: AngularFirestoreCollection<PostInterface>;
  postDoc: AngularFirestoreDocument<PostInterface>;
  posts: Observable<PostInterface[]>;
  post: Observable<PostInterface>;

  constructor(
    private afs: AngularFirestore) {
      this.postCollection = this.afs.collection('posts', ref => ref);
     }

    addNewPost(post: PostInterface){
      this.postCollection.add(post);
    }

    getAllPosts():Observable<PostInterface[]>{
      this.posts = this.postCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as PostInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
      return this.posts;
    }

    getOnePost(idPost: string){
      this.postDoc = this.afs.doc<PostInterface>(`posts/${idPost}`);
      this.post = this.postDoc.snapshotChanges().pipe(map(action => {
        if(action.payload.exists === false){
          return null;
        } else {
          const data = action.payload.data() as PostInterface;
          data.id = action.payload.id;
          return data;
        }
      }));
      return this.post;
    }

    updatePost(post: PostInterface){
      this.postDoc = this.afs.doc(`posts/${post.id}`);
      this.postDoc.update(post);
    }

    deletePost(post: PostInterface){
      this.postDoc = this.afs.doc(`posts/${post.id}`);
      this.postDoc.delete(); 
    }
}
