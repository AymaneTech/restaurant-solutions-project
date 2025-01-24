import {createReducer, on} from '@ngrx/store';
import {Recipe} from '../menu/menu.model';
import {addRecipeToOrders, incrementOrderCount} from './customer.actions';

export interface CustomerState {
  orderCount: number;
  orderedRecipes: Recipe[];
}

export const initialState: CustomerState = {
  orderCount: 0,
  orderedRecipes: []
}

export const customerReducer = createReducer(
  initialState,
  on(incrementOrderCount, (state) => ({
    ...state,
    orderCount: state.orderCount + 1
  })),
  on(addRecipeToOrders, (state, {recipe}) => ({
    ...state,
    orderedRecipes: [...state.orderedRecipes, recipe]
  }))

)
