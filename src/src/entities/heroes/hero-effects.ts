import { Injectable } from '@angular/core';
import { ofAction } from 'ngrx-actions';
import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import * as heroActions from './hero-actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { HeroService } from '../../app/hero.service';
import { MessageService } from '../../app/message.service';

@Injectable()
export class HeroEffects {
  constructor(
    private store: Store<any>,
    private update$: Actions,
    private heroService: HeroService,
    private messageService: MessageService) {}

@Effect()
addHero$ = this.update$.pipe(
  ofAction(heroActions.AddHero),
  switchMap(hero => this.heroService.addHero(hero.payload)),
  map(response => {
    this.messageService.add("Adding hero to the store.");
    return new heroActions.AddHeroSuccess(response);
    },
  catchError(error => error.subscribe().switchMap(error =>{
    console.log(error)
  }))));

@Effect()
getHeroes$ = this.update$.pipe(
  ofAction(heroActions.GetHeroes),
  switchMap(hero => this.heroService.getHeroes()),
  map(response => {
    this.messageService.add("Populating store with heroes.");
    return new heroActions.GetHeroesSuccess(response);
    }));

@Effect()
updateHero$ = this.update$.pipe(
  ofAction(heroActions.UpdateHero),
  switchMap(hero => this.heroService.updateHero(hero.payload)),
  map(response => {
    this.messageService.add("Updating hero in the store.");
    return new heroActions.UpdateHeroSuccess(response);
    }));

@Effect()
deleteHero$ = this.update$.pipe(
  ofAction(heroActions.DeleteHero),
  switchMap(hero => this.heroService.deleteHero(hero.payload)),
  map(response => {
    this.messageService.add("Deleting hero in the store.");
    return new heroActions.DeleteHeroSuccess(response);
    }));
}
