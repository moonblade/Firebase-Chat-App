import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: SocialUser;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.user = this.loginService.getLoggedInUser();
  }

  logout() {
    this.loginService.logout();
  }
}
