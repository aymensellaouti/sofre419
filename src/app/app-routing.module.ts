import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cvTech/cv/cv.component';
import {TodoComponent} from './todo/todo.component';
import {DetailCvComponent} from './detail-cv/detail-cv.component';

const routes: Routes = [
  {path: 'cv', component: CvComponent},
  {path: 'cv/:id', component: DetailCvComponent},
  {path: 'todo', component: TodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
