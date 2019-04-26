import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const link = 'http://localhost:3000/api/Users/login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }
  login(credentials) {
    return this.http.post(link, credentials);
  }
}
