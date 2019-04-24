import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/personne.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[] = [];
  @Output() sendPersonneFromList = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'teacher', 'zizou.jpeg', 123456, 36),
      new Personne(2, 'test', 'test', 'everything', 'zizou.jpeg', 4444, 26)
    ];
  }
  processItem(personne) {
    this.sendPersonneFromList.emit(
      personne
    );
  }

}
