import { Action, createReducer, on } from '@ngrx/store';
import { UserActions, newUserActions } from './user.actions';
import { Main } from '../app/models/WeatherModel';
export const userFeatureKey = 'user';

export interface State {
  main:Main[],
  error:String
}

export const initialState: State = {
  main:[],
  error: '',
};

export function reducer(state = initialState,action:UserActions):State {
  switch (action.type){
    case newUserActions.loadUsers:
      return {
        ...state
      }
      case newUserActions.loadUsersSuccess:
        return {
          ...state,
          main: [action.payload.data],
          error:''
        }
        case newUserActions.loadUsersFailure:
          return {
            ...state,
            main: [],
            error:action.payload.error
          }
    default:
      return state;
  }
}
