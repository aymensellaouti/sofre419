import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }
  message = '';
  ngOnInit() {
  }

  login(formulaire: NgForm) {
    this.loginService.login(formulaire.value).subscribe(
      (reponse) => {
        localStorage.setItem('token', reponse['id']);
        this.message = '';
        this.router.navigate(['']);
        },
      (erreur) => {
        this.message = erreur.error.error.message;
        console.log(erreur);
      }
    );
  }
}
