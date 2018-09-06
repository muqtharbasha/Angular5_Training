import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestService {

  constructor(
    private http: HttpClient
  ) { }

  getSomeText() {
    return 'Hello World!!';
  }

  getTime(): Observable<Date> {
    return Observable.create((observer: Observer<Date>) => {
      let count = 0;
      const date = new Date('20-03-2014');
      const interval = setInterval(() => {
        count++;
        if (count === 4) {
          // observer.error('This is an error');
        } else {
          observer.next(new Date());
          // observer.next(date);
        }
      }, 1000);
      setTimeout(() => {
        clearInterval(interval);
        observer.complete();
        observer.next(new Date());
      }, 10000);
    });
  }

  getRandomNames() {
    return this.http.get('https://randomuser.me/api/').pipe(
      map((data: any) => data.results),
      map((results: any[]) => results[0])
    )
    // return this.http.get('https://randomuser.me/api/')
    //   .toPromise().then((data: any) => {
    //     return data.results[0]
    //   });
  }
}
