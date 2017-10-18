import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { loggedIn } from '../../utils/user-utils';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  isLoggedIn = loggedIn;

  model: any = {};

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.login(this.model.email, this.model.password)
      .subscribe(
        (data) => {
          console.log('logged in with data', data);
        },
        (error) => {
          console.error('error logging in', error);
        }
      );
  }

  logout() {
    this.loginService.logout();
  }
}
