import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cvTech/cv/cv.component';
import {TodoComponent} from './todo/todo.component';
import {DetailCvComponent} from './detail-cv/detail-cv.component';
import {FirstComponent} from './first/first.component';
import {StyleComponent} from './directive/style/style.component';
import {NotFound404Component} from './not-found404/not-found404.component';
import {LoginComponent} from './login/login.component';
import {AddPersonneComponent} from './cvTech/add-personne/add-personne.component';

const routes: Routes = [
  {path: 'cv', children: [
      {path: '', component: CvComponent},
      {path: 'add', component: AddPersonneComponent},
      {path: ':id', component: DetailCvComponent},
      ]
  },
  {path: '', redirectTo: 'cv', pathMatch: 'full'},
  {path: 'todo', component: TodoComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFound404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
