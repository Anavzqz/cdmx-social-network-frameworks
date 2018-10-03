import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLogin: boolean;
  public userName: string;
  public userEmail: string;
  //public userPicture: string;
  public userId: string;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() { //getAuth nos devuelde el estado, si es que esta logueado o no
    this.onCheckUserLogin();
  }

  onCheckUserLogin(){
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.userName = auth.displayName;
        this.userEmail = auth.email;
        //this.userPicture = auth.photoUrl;
        this.userId = auth.uid;
      } else {
        this.isLogin = false;
      }
    })
  }
  onLogout(){
    this.authService.logout();
  }
}
