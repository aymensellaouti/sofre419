import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne.model';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders().append(
        'Authorization', token);
      return this.http.delete(link + `/${id}`, {headers});
    } else {
      return this.http.delete(link + `/${id}`);
    }
}
}
