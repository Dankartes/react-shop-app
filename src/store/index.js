import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './Products/products-slice';
import cartSlice from './Cart/cart-slice';

const store = configureStore({
  reducer: {
    productsReducer: productsSlice.reducer,
    cartReducer: cartSlice.reducer,
  },
});

export default store;
