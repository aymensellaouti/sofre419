import { Component, OnInit } from '@angular/core';
import {Personne} from '../../Model/personne.model';
import {HttpClient} from '@angular/common/http';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  resultSearch: Personne[] = [];
  constructor(
    private cvService: CvService
  ) { }

  ngOnInit() {
  }

  search(chaine) {
    if (chaine.length) {
    this.cvService.findByNameLike(chaine).subscribe(
      (personnes) => {
        console.log(personnes);
        this.resultSearch = personnes;
      },
      (error) => {
        console.log('erreur');
      }
    );
    } else {
      this.resultSearch = [];
    }

  }

}
