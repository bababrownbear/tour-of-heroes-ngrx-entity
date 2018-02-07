import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as heroActions from '../entities/heroes/hero-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'Tour of Heroes';

  constructor(private store: Store<any>){

  }

  ngOnInit(){
    this.store.dispatch(new heroActions.GetHeroes);
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/