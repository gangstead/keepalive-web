import { Headers, RequestOptions } from '@angular/http';
import { get } from 'lodash';

export const authHeader = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (get(currentUser, 'token')) {
      const headers = new Headers({ 'Authorization': `Bearer ${currentUser.token}`});
      return new RequestOptions({ headers });
    }
};

export const loggedIn = (): boolean => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  return !!get(currentUser, 'token');
};
