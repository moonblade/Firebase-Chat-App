import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private router: Router, private authService: AngularFireAuth) {
    this.subscibeLogin();
  }

  checkLogin() {
    if (!localStorage.getItem('loggedInUser')) {
      this.router.navigate(['/login']);
    }
  }

  getLoggedInUser() {
    return getLoggedInUser();
  }

  loginWithGoogle() {
    this.authService.signInWithRedirect(new auth.GoogleAuthProvider());
  }

  logout() {
    this.authService.signOut();
  }

  subscibeLogin() {
    this.authService.authState.subscribe((user) => {
      const loggedIn = (user != null);
      if (loggedIn && localStorage.getItem('loggedInUser') !== undefined) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        this.router.navigate(['main']);
      } else {
        localStorage.removeItem('loggedInUser');
        this.router.navigate(['login']);
      }
    });
  }
}

export function getLoggedInUser() {
  return JSON.parse(localStorage.getItem('loggedInUser'));
}
