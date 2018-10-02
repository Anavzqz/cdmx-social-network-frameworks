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

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() { //getAuth nos devuelde el estado, si es que esta logueado o no
    this.authService.getAuth().subscribe(auth => {//subscribe ??
      if (auth) {
        this.isLogin = true;
        this.userName = auth.displayName;
        this.userEmail = auth.email;
        //this.userPhoto = auth.photoUrl;
      } else {
        this.isLogin = false;
      }
    });
  }

  onClickLogout(){
    this.authService.logout();
  }
}
