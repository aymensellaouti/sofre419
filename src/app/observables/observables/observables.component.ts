import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Observer, Subscription} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, OnDestroy {
  // image = 'as.jpg';
  images = [
    'as.jpg',
    'cv.gif',
    'zizou.jpeg'
  ];
  imgObservable: Observable<string>;
  subscription1: Subscription;
  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.http.get('http://jsonplaceholder.typicode.com/users').subscribe(
      (reponse) => {
        console.log(reponse);
      },
      (erreur) => {
        console.log(erreur);
      },
      () => {
        console.log('data send successfully');
      }
    )
    this.imgObservable = new Observable<string>(
      (observer) => {
        let i = this.images.length - 1;
        setInterval(() => {
          if (i < 0) {
             i = this.images.length - 1;
          }
          observer.next(this.images[i--]);
        }, 1000);
      }
    );
    // imgObservable.subscribe(
    //   (image) => {
    //     this.image = image;
    //   }
    // );
    const observable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
     this.subscription1 = observable.subscribe((val) => {
      console.log(val);
    });
    observable.pipe(
      filter(x => !(x % 2)),
      map(x => 'cc' + x)
    ).subscribe(
      (data) => {
        console.log( data);
      },
      (erreur) => {
        console.log('erreur');
      },
      () => {
        console.log('complete');
      }
    );

  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
  }

}
