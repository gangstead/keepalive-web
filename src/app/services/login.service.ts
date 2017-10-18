import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import { get } from 'lodash';
import 'rxjs/add/operator/map';

const API_URL = environment.apiUrl;

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  public login(email: string, password: string) {
    return this.http
      .post(`${API_URL}/login`, JSON.stringify({ login: { email, password }}))
      .map((response: Response) => {
        const user = response.json().user;

        if (get(user , 'token')) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  public logout() {
    localStorage.removeItem('currentUser');
  }

}
