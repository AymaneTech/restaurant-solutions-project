import { createFeatureSelector, createSelector } from '@ngrx/store';
import {CustomerState} from './customer.reducers';

export const selectCustomerState = createFeatureSelector<CustomerState>('customer');

export const selectOrderedRecipes = createSelector(
  selectCustomerState,
  state => state.orderItems
)
