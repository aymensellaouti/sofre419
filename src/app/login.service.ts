import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const link = 'http://localhost:3000/api/Users/login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogged() {
    return !!localStorage.getItem('token');
  }
  constructor(
    private http: HttpClient
  ) { }
  login(credentials) {
    return this.http.post(link, credentials);
  }
  logout() {
    localStorage.removeItem('token');
  }
}
