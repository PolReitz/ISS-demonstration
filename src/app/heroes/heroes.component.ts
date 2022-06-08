import { Component, OnInit } from '@angular/core';
// import { HEROES } from 'src/app/mock-heroes';
import { Hero } from 'src/app/hero';

import { HeroService } from '../hero.service';
// import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  // selectedHero?: Hero;                               onSelect non nécessaire avec routing

  // constructor(private heroService: HeroService) {}
  constructor(private heroService: HeroService) { }
  // constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);     // préciser le fctionnement du paramètre de la méthode .subscribe()
  }                                                     // sens des arguments passés de cette manière ?

  
  // onSelect(hero: Hero): void {                       onSelect non nécessaire avec routing
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

}
