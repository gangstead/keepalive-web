import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import { Button } from '../models/button';
import { Observable } from 'rxjs/Observable';
import { authHeader } from '../utils/user-utils';
import 'rxjs/add/operator/map';

const API_URL = environment.apiUrl;

@Injectable()
export class ButtonService {

  constructor(
    private http: Http
  ) {
  }

  public getButtons(): Observable<Button[]> {
    return this.http
      .get(`${API_URL}/buttons`)
      .map((response: Response) => {
        const buttons = response.json().buttons;
        return buttons.map((b) => new Button(b));
      });
  }

  public create( button: Button) {
    return this.http
      .post(`${API_URL}/buttons`, { button }, authHeader())
      .map((response: Response) => new Button(response.json().button));
  }
}
