import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { createCustomerReducer } from './createCustomer/create-customer.reducer';
import { SpinnerState } from './spinner/spinner.model';
import { spinnerReducer } from './spinner/spinner.reducer';
import { IResponse } from '../interfaces/customer.interface';
import { CreateCustomerEffects } from './createCustomer/create-customer.effects';

export interface State {
  spinner: SpinnerState
  customer: IResponse
}

export const reducers: ActionReducerMap<State> = {
  spinner: spinnerReducer,
  customer: createCustomerReducer,
};

export const effects = [CreateCustomerEffects]


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
