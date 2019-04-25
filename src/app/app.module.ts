import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second.component';
import {FormsModule} from '@angular/forms';
import { CardComponent } from './card/card.component';
import { TeamFlagComponent } from './team-flag/team-flag.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListComponent } from './cvTech/list/list.component';
import { ItemComponent } from './cvTech/item/item.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { StyleComponent } from './directive/style/style.component';
import { ClasseComponent } from './directive/classe/classe.component';
import { HoghlightDirective } from './directive/hoghlight.directive';
import { RainbowDirective } from './directive/rainbow.directive';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import {TodoService} from './todo.service';
import { TodoComponent } from './todo/todo.component';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';
import { HeaderComponent } from './header/header.component';
import { DetailCvComponent } from './detail-cv/detail-cv.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { LoginComponent } from './login/login.component';
import { ObservablesComponent } from './observables/observables/observables.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    CardComponent,
    TeamFlagComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailComponent,
    StyleComponent,
    ClasseComponent,
    HoghlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    TodoComponent,
    EmbaucheComponent,
    HeaderComponent,
    DetailCvComponent,
    NotFound404Component,
    LoginComponent,
    ObservablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
