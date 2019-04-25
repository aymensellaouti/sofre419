import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/personne.model';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[] = [];
  @Output() sendPersonneFromList = new EventEmitter();
  constructor(
    private cvService: CvService
  ) { }

  ngOnInit() {
    this.personnes = this.cvService.getPersonnes();
  }
  processItem(personne) {
    this.sendPersonneFromList.emit(
      personne
    );
  }

}
