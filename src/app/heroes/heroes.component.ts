import { Component } from '@angular/core';
import { Hero } from '../hero';

// import {HEROES} from "../mock-heroes";
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  // heroes = HEROES;

  heroes: Hero[] = [];

  // initialization of dependencies etc
  constructor(private heroService: HeroService, private messageService: MessageService) {}

  // funkcja odbierajaca dane z serwisu
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  getHeroesAsync(): void {
    this.heroService.getHeroesAsync()
        .subscribe(heroes => this.heroes = heroes);
  }

  // rzeczywiste odebranie
  ngOnInit(): void {
    this.getHeroesAsync();
  }

  selectedHero?: Hero;
  onSelect(hero:Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
