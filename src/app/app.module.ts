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
    DetailComponent
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
