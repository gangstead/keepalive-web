import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http } from '@angular/http';
import { Button } from './button';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ButtonDataService {

  constructor(
    private http: Http
  ) {
  }

  public getButtons(): Observable<Button[]> {
    return this.http
      .get(`${API_URL}/buttons`)
      .map((response) => {
        const buttons = response.json().buttons;
        console.log('swg buttons', buttons);
        return buttons.map((b) => new Button(b));
      });
  }
}
