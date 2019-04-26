import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Personne} from '../Model/personne.model';
import {CvService} from '../cvTech/cv.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  personne: Personne = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (mesParams) => {
        this.cvService.findPersonneById(mesParams.id).subscribe(
          (personne) => {
            this.personne = personne;
          },
          (erreur) => {
            this.router.navigate(['']);
          }
        );
      }
    );
  }
  deletePersonne() {
    this.cvService.deletePersonne(this.personne.id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['cv']);
      }
    );
  }

}
