import {createAction} from '@ngrx/store';
import {Recipe} from '../menu/menu.model';

export const incrementOrderCount = createAction('[Orders] Increment Order Count');

export const addRecipeToOrders = createAction('[Orders] Add Recipe To Orders',
  (recipe: Recipe) => ({recipe}));

