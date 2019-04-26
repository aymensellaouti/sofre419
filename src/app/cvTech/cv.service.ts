import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne.model';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

const link = 'http://localhost:3000/api/personnes';
@Injectable({
  providedIn: 'root'
})
export class CvService {

  private personnes: Personne[] = [];
  constructor(
    private http: HttpClient
  ) {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'teacher', 'zizou.jpeg', 123456, 36),
      new Personne(2, 'test', 'test', 'everything', '', 4444, 26)
    ];
  }
  getFakePersonnes() {
    return this.personnes;
  }
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(link);
  }
  findPersonneById(id): Observable<Personne> {
    return this.http.get<Personne>(link + `/${id}`);
  }
  deletePersonne(id): Observable<any> {
    return this.http.delete(link + `/${id}`);
  }
  addPersonne(personne: Personne) {
    return this.http.post(link, personne);
  }
  findByNameLike(chaine): Observable<Personne[]> {
    const filter = `{"where":{"name":{"like":"%${chaine}%"}}}`;
    const params = new HttpParams().set('filter', filter);
    return this.http.get<Personne[]>(link, {params});
  }
}
