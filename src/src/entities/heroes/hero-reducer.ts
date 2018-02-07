import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Hero } from './hero';
import * as heroActions from './hero-actions';

export interface HeroState extends EntityState<Hero> { }

const heroAdapter = createEntityAdapter<Hero>();

const heroInitialState: HeroState = heroAdapter.getInitialState();

export function heroReducer(
  state: HeroState = heroInitialState,
  action
) {
  switch (action.type) {
    case heroActions.ADD_HERO_SUCCESS:
      return heroAdapter.addOne(action.payload, state);
    case heroActions.GET_HEROES_SUCCESS:
      return heroAdapter.addAll(action.payload, state);
    case heroActions.UPDATE_HERO_SUCCESS:
      return heroAdapter.updateOne(action.payload, state);
    case heroActions.DELETE_HERO_SUCCESS:      
      return heroAdapter.removeOne(action.payload, state);
    default:
      return state;
  }
}

export const selectHeroState = createFeatureSelector<HeroState>('heroes');

export const { selectAll: selectAllHeroes, selectIds } = heroAdapter.getSelectors(
  selectHeroState
);
