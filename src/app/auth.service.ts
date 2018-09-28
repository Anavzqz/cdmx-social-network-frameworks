import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    public afAuth: AngularFireAuth
  ) { }

  
  registerUser(email: string, password: string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then( userData  => resolve(userData),
      err => reject (err));
    });
  }

  loginEmail(email: string, password: string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then( userData  => resolve(userData),
      err => reject (err));
    });
  }

  loginGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  getAuth(){
    return this.afAuth.authState.pipe(map(auth => auth));
  }
  

  logout(){
    return this.afAuth.auth.signOut();
  }
}
