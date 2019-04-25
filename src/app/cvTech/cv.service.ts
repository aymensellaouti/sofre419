import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne.model';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private personnes: Personne[] = [];
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'teacher', 'zizou.jpeg', 123456, 36),
      new Personne(2, 'test', 'test', 'everything', '', 4444, 26)
    ];
  }
  getPersonnes() {
    return this.personnes;
  }
}
