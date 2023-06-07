import { createFeatureSelector, createSelector } from '@ngrx/store';
import {State} from './user.reducer'
const getUserFeatureState = createFeatureSelector<State>('userState');
export const getUser = createSelector(
    getUserFeatureState,
    state => state.main
)

export const getError = createSelector(
    getUserFeatureState,
    state => state.error
)