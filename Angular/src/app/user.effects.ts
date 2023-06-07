import { Injectable } from '@angular/core';
import { Actions,  createEffect, ofType } from '@ngrx/effects';
import {Observable,of} from 'rxjs';
import { Action } from '@ngrx/store';
import * as userActions from './user.actions';
import { WeatherServiceService } from './ngrx/weather-service.service';
import { mergeMap,map,catchError } from 'rxjs';
import { Main, Weather, weatherData } from './models/WeatherModel';

@Injectable()
export class UserEffects {
main:Main;

  constructor(private actions$: Actions,private weatherService:WeatherServiceService) {}
  /*
    loadWeather$ = createEffect(() => { 
    return  this.actions$.pipe(ofType(userActions.newUserActions.loadUsers),
      mergeMap(() => this.weatherService.getWeather().pipe(
        map(() =>{ new userActions.LoadUsersSuccess({data:this.main})})
       ))
      )
    })
     */
  }


