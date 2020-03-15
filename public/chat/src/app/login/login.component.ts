import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  loginWithGoogle(): void {
    this.loginService.loginWithGoogle();
  }

  signOut(): void {
    this.loginService.logout();
  }


}
