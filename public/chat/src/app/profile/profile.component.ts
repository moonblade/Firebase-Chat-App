import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.user = this.loginService.getLoggedInUser();
  }

  logout() {
    this.loginService.logout();
  }
}
