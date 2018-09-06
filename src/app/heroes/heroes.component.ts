import { Component, OnInit } from '@angular/core';
import { Hero } from "src/app/heroes/hero.model";
import { HeroService } from '../services/hero.service';
import { TestService } from '../services/test.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  allHeroes: Hero[];
  heroName: string = 'Mahesh';

  constructor(
    private heroService: HeroService,
    private testService: TestService
  ) { }

  ngOnInit() {
    console.log(this.testService.getSomeText());
    // this.heroService.getHeroes()
    //   .then((heroes: Hero[]) => {
    //     this.allHeroes = heroes;
    //   }, (err) => {
    //     throw err;
    //   });
    this.heroService.getHeroesObservable()
      .subscribe(
        (data: Hero[]) => {
          this.allHeroes = data;
        }
      )
  }

  onHeroSelected(data: Hero) {
    this.multipleObservables();
    console.log(data);
  }

  clicked() {
    console.log(this.heroName);
    this.heroName = 'some new name';
  }

  multipleObservables() {
    const observables = [
      this.heroService.getHeroesObservable(),
      this.heroService.getHeroesObservable(),
      this.heroService.getHeroesObservable()
    ];
    forkJoin(
      observables
    ).subscribe(
      (data: any[]) => {
        // data.forEach(resp => console.log(resp));
      }
    )
  }

}
