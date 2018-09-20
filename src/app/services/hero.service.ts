import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";

import { Hero } from "../heroes/hero.model";
import { TestService } from "./test.service";

@Injectable()
export class HeroService {

  private heroes: Hero[] = [{
    id: 1,
    name: 'Sumanth',
    dob: new Date('01-01-0001') 
  }, {
    id: 2,
    name: 'Vedanth',
    dob: new Date('01-01-2999')  
  }, {
    id: 3,
    name: 'Muqthar',
    dob: new Date() 
  }, {
    id: 4,
    name: 'Mahesh',
    dob: new Date('03-03-2018') 
  }];

  constructor(
    private testService: TestService
  ) { }

  getHeroes(): Promise<Hero[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.heroes.slice());
      }, 2000);
    });
    // return this.heroes.slice();
  }

  getHeroesObservable(): Observable<Hero[]> {
    return Observable.create((observer: Observer<Hero[]>) => {
      setTimeout(() => {
        observer.next(this.heroes.slice());
        observer.complete();
      }, 2000);
    })
  }
}
