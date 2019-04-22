import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: 'first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name = 'sofrecom';
  private isShown = true;
  message = 'afficher';
  constructor() { }

  ngOnInit() {
  }
  getIsShown() {
    return this.isShown;
  }
  toogle(maVar) {
    console.log(maVar.innerHTML);
    this.isShown = !this.isShown;
    (this.message === 'afficher') ? this.message = 'cacher' : this.message = 'afficher';
  }
}
