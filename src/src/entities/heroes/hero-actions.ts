import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action } from '@ngrx/store';

export const ADD_HERO = 'ADD_HERO';
export const ADD_HERO_SUCCESS = 'ADD_HERO_SUCCESS';
export const GET_HEROES = 'GET_HEROES';
export const GET_HEROES_SUCCESS = 'GET_HEROES_SUCCESS';
export const UPDATE_HERO = 'UPDATE_HERO';
export const UPDATE_HERO_SUCCESS = 'UPDATE_HERO_SUCCESS';
export const GET_HERO = 'GET_HERO';
export const GET_HERO_SUCCESS = 'GET_HERO_SUCCESS';
export const DELETE_HERO = 'DELETE_HERO';
export const DELETE_HERO_SUCCESS = 'DELETE_HERO_SUCCESS';

export class AddHero implements Action {
   readonly type = ADD_HERO;
   constructor(public payload: Hero) {}
}

export class AddHeroSuccess implements Action  {
   readonly type = ADD_HERO_SUCCESS;
   constructor(public payload: Hero) {}
}

export class GetHeroes implements Action {
   readonly type = GET_HEROES;
}

export class GetHeroesSuccess implements Action  {
   readonly type = GET_HEROES_SUCCESS;
   constructor(public payload: Hero[]) {}
}

export class UpdateHero implements Action {
   readonly type = UPDATE_HERO;
   constructor(public payload: Hero) {}
}

export class UpdateHeroSuccess implements Action  {
   readonly type = UPDATE_HERO_SUCCESS;
   constructor(public payload: Hero) {}
}

export class DeleteHero implements Action {
   readonly type = DELETE_HERO;
   constructor(public payload: Hero) {}
}

export class DeleteHeroSuccess implements Action  {
   readonly type = DELETE_HERO_SUCCESS;
   constructor(public payload: number) {}
}
