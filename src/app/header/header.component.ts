import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  link = '';
  constructor(
    private router: Router,
    public loginService: LoginService
  ) { }

  ngOnInit() {
  }
  goToRoute() {
    const link = [this.link];
    this.router.navigate(link);
  }
  logout() {
    this.loginService.logout();
  }

}
