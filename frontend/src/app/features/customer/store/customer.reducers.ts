import {createReducer, on} from '@ngrx/store';
import {OrderItem} from '../menu/menu.model';
import {addOrderItemQuantity, addRecipeToOrders, reduceOrderItemQuantity, removeOrderItem} from './customer.actions';

export interface CustomerState {
    orderItems: OrderItem[];
}

export const initialState: CustomerState = {
    orderItems: []
}

export const customerReducer = createReducer(
    initialState,
    on(addRecipeToOrders, (state, {recipe}) => {
        const existingOrderItem = state.orderItems.find(orderItem => orderItem.recipe.id === recipe.id);

        const updatedOrderItems = existingOrderItem
            ? state.orderItems.map(orderItem =>
                orderItem.recipe.id === recipe.id
                    ? {...orderItem, quantity: orderItem.quantity + 1}
                    : orderItem
            )
            : [...state.orderItems, {recipe, quantity: 1}];

        return {
            ...state,
            orderItems: updatedOrderItems
        };
    }),
    on(removeOrderItem, (state, {item}) => {
        const updatedOrderItems = state.orderItems.filter(
            oi => oi.recipe.id !== item.recipe.id
        );

        return {
            ...state,
            orderItems: updatedOrderItems
        }
    }),
  on(addOrderItemQuantity, (state, { itemId }) => ({
    ...state,
    orderItems: state.orderItems.map(item =>
      item.recipe.id === itemId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  })),
  on(reduceOrderItemQuantity, (state, { itemId }) => ({
    ...state,
    orderItems: state.orderItems.map(item =>
      item.recipe.id === itemId && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  }))
)
