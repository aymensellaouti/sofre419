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
        const personne = this.cvService.findPersonneById(mesParams.id);
        if (personne) {
          this.personne = personne;
        } else {
          this.router.navigate(['']);
        }
      }
    );
  }

}
