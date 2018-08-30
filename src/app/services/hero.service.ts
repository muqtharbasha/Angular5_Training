import { Hero } from "../heroes/hero.model";
import { TestService } from "./test.service";
import { Injectable } from "@angular/core";

@Injectable()
export class HeroService {

  private heroes: Hero[] = [{
    id: 1,
    name: 'Sumanth' 
  }, {
    id: 2,
    name: 'Vedanth' 
  }, {
    id: 3,
    name: 'Muqthar' 
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
}
