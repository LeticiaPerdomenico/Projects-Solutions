// Import createStore and combineReducers here.
/*4*/
import { createStore, combineReducers } from 'redux';
// Import the slice reducers here.
/*5*/
import { cartReducer } from '../features/cart/cartSlice.js';
import { inventoryReducer } from '../features/inventory/inventorySlice.js';
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice.js';
// Create and export the store here.
/*6*/
export const store = createStore(combineReducers({
  cart: cartReducer,
  inventory: inventoryReducer,
  currencyFilter: currencyFilterReducer
}))
