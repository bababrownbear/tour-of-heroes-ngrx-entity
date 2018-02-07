import { Component, OnInit } from '@angular/core';
import { Hero } from '../../entities/heroes/hero';
import { HeroService } from '../hero.service';
import { Store } from '@ngrx/store';
import * as heroActions from '../../entities/heroes/hero-actions';
import { selectAllHeroes } from '../../entities/heroes/hero-reducer';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService, private store: Store<any>) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.store.select(selectAllHeroes).subscribe(heroes=>{
    this.heroes = heroes;
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }

    this.store.dispatch(new heroActions.AddHero({ name } as Hero));

  }

  delete(hero: Hero): void {
    this.store.dispatch(new heroActions.DeleteHero(hero));
  }

}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/