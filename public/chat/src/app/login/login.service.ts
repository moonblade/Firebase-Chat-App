import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private router: Router, private authService: AuthService) {
    this.subscibeLogin();
  }

  checkLogin() {
    if (!localStorage.getItem('loggedInUser')) {
      this.router.navigate(['/login']);
    }
  }

  getLoggedInUser(): SocialUser {
    return JSON.parse(localStorage.getItem('loggedInUser'));
  }

  loginWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logout() {
    this.authService.signOut();
  }

  subscibeLogin() {
    this.authService.authState.subscribe((user) => {
      const loggedIn = (user != null);
      if (loggedIn) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        this.router.navigate(['main']);
      } else {
        localStorage.removeItem('loggedInUser');
        this.router.navigate(['login']);
      }
    });
  }
}
