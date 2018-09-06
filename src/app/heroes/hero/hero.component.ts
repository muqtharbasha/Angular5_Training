import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Hero } from "src/app/heroes/hero.model";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnChanges {

  @Input('bhagi') hero: Hero;
  @Output() heroSelected: EventEmitter<Hero> = new EventEmitter<Hero>();

  className: any;
  myHeroName: string;
  constructor() {
    // console.log(this.hero);
   }

  ngOnInit() {
    // console.log(this.hero);
    this.myHeroName = this.hero.name;
  }

  ngOnChanges(change: SimpleChanges) {
    const name = change['hero'].currentValue;
    // console.log(name);
    this.className = { 
      'class-checked': true,
       'class-unchecked': !true
       };
  }
  
  onHeroClick() {
    this.heroSelected.emit(this.hero);
  }

}
