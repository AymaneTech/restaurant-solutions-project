import { createFeatureSelector, createSelector } from '@ngrx/store';
import {CustomerState} from './customer.reducers';

export const selectCustomerState = createFeatureSelector<CustomerState>('customer');

export const selectOrderCount = createSelector(
  selectCustomerState,
  state => state.orderCount
)

export const selectOrderedRecipes = createSelector(
  selectCustomerState,
  state => state.orderedRecipes
)
