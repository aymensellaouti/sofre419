import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/personne.model';
import {CvService} from '../cv.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[] = [];
  @Output() sendPersonneFromList = new EventEmitter();
  constructor(
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cvService.getPersonnes().subscribe(
      (personnes) => {
        this.personnes = personnes;
      },
      (erreur) => {
        this.personnes = this.cvService.getFakePersonnes();
        alert('Data are fake problem with Api');
      }
    );
  }
  processItem(personne) {
    this.sendPersonneFromList.emit(
      personne
    );
  }

  goToTodo() {
    this.router.navigate(['todo']);
  }

}
