import {createAction, props} from '@ngrx/store';
import {OrderItem, Recipe} from '../menu/menu.model';

export const addRecipeToOrders = createAction('[Orders] Add Recipe To Orders',
    (recipe: Recipe) => ({recipe}));

export const removeOrderItem = createAction('[Orders] Remove Order Item',
    props<{ item: OrderItem }>());

export const reduceOrderItemQuantity = createAction('[Orders] Reduce Quantity',
  props<{itemId: number}>());

export const addOrderItemQuantity = createAction('[Orders] Add Quantity',
  props<{itemId: number}>());

