import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/personne.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne;
  @Output() sendPersonne = new EventEmitter();
  constructor() { }

  sendCv() {
    this.sendPersonne.emit(
      this.personne
    );
  }
  ngOnInit() {
  }

}
