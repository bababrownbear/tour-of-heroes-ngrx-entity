import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../../entities/heroes/hero';
import { HeroService }  from '../hero.service';
import { Store } from '@ngrx/store';
import * as heroActions from '../../entities/heroes/hero-actions';
import { selectAllHeroes } from '../../entities/heroes/hero-reducer';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    //this.heroService.getHero(id)
      //.subscribe(hero => this.hero = hero);
    this.store.select(selectAllHeroes).subscribe(heroes=>{
      this.hero = heroes.find(hero => hero.id == id);
    });
    
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
   this.store.dispatch(new heroActions.UpdateHero(this.hero));
   this.goBack();
    //this.heroService.updateHero(this.hero)
    //.subscribe(() => this.goBack());
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/