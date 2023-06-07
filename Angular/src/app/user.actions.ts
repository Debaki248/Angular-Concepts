import { Action, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Main } from './models/WeatherModel';


export enum  newUserActions{
    loadUsers = "[User] LoadUsers" ,
    loadUsersSuccess = "[User] loadUsersSuccess",
    loadUsersFailure = "[User] loadUsersFailure"
}

export class LoadUsers implements Action {
  readonly type: newUserActions.loadUsers;
}

export class LoadUsersSuccess implements Action {
  readonly type: newUserActions.loadUsersSuccess;
  constructor(public payload:{data:Main}){}
}

export class LoadUsersFailure implements Action {
  readonly type: newUserActions.loadUsersFailure;
  constructor(public payload:{error:any}){}
}

export type UserActions = LoadUsers|LoadUsersSuccess|LoadUsersFailure;