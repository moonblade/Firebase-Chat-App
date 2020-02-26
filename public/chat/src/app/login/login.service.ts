import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';

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

  loginWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  subscibeLogin() {
    this.authService.authState.subscribe((user) => {
      const loggedIn = (user != null);
      console.log(loggedIn);
      console.log(user);
      if (loggedIn) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        console.log(user);
      }
    });
  }
}
