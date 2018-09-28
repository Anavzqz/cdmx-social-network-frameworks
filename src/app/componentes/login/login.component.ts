import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

onSubmitLogin() {
  this.authService.loginEmail(this.email, this.password)
  .then( (res) => {
    this.router.navigate(['/timeline']);
  }).catch((err) => {
    console.log(err);
    alert('error');
  });
};

onClickGoogle() {
  this.authService.loginGoogle()
  .then( (res) => {
    this.router.navigate(['/timeline']);
  }).catch( err => console.log(err.message));
}

}
