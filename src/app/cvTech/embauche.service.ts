import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne.model';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  personnes: Personne[] = [];
  constructor() { }
  getPersonnes() {
    return this.personnes;
  }
  addPersonne(personne: Personne) {
    const index = this.personnes.indexOf(personne);
    if (index < 0) {
      this.personnes.push(personne);
    } else {
      alert('vous déjà selectionné ce profil');
    }
  }
}
