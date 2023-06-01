import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './Products/products-slice';
import cartSlice from './Cart/cart-slice';
import messagesSlice from './Messages/messages-slice';

const store = configureStore({
  reducer: {
    productsReducer: productsSlice.reducer,
    cartReducer: cartSlice.reducer,
    messagesReducer: messagesSlice.reducer,
  },
});

export default store;

