/*import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';//??
import 'rxjs/add/operator/map';//??
import 'rxjs/add/operator/take';//??

import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService    
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.afAuth.authState
    .take(1)
    .map(authState => !! authState)
    .do( log => {
      if(!!log) {
        this.router.navigate(['./login']);
      }
    });
  }
}
*/