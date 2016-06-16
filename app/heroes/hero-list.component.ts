import { Component, OnInit }   from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';
import { Hero, HeroService }   from './hero.service';
@Component({
    template: `
    <h2>HEROES</h2>
    <ul class="items">
      <li *ngFor="let hero of heroes"
        [class.selected]="isSelected(hero)"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  `
})
export class HeroListComponent implements OnInit {
    heroes: Hero[];
    private selectedId: number;
    constructor(
        private service: HeroService,
        private router: Router,
        routeParams: RouteParams) {
        this.selectedId = +routeParams.get('id');
    }
    isSelected(hero: Hero) { return hero.id === this.selectedId; }
    onSelect(hero: Hero) {
        this.router.navigate( ['HeroDetail', { id: hero.id }] );
    }
    ngOnInit() {
        this.service.getHeroes().then(heroes => this.heroes = heroes)
    }
}
