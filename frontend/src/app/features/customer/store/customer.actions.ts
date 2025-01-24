import {createAction, props} from '@ngrx/store';
import {OrderItem, Recipe} from '../menu/menu.model';

export const addRecipeToOrders = createAction('[Orders] Add Recipe To Orders',
    (recipe: Recipe) => ({recipe}));

export const removeOrderItem = createAction('[Orders] Remove Order Item',
    props<{ item: OrderItem }>());

