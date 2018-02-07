import { Component, OnInit } from '@angular/core';
import { Hero } from '../../entities/heroes/hero';
import { HeroService } from '../hero.service';
import { selectAllHeroes } from '../../entities/heroes/hero-reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private store: Store<any>) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.store.select(selectAllHeroes).subscribe(heroes=>{
    this.heroes = heroes.slice(0,4);
    });
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/