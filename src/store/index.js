import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './Products/products-slice';
import cartSlice from './Cart/cart-slice';
import dialogSlice from './Dialog/dialog-slice';
import authSlice from './Auth/auth-slice';

const store = configureStore({
  reducer: {
    productsReducer: productsSlice.reducer,
    cartReducer: cartSlice.reducer,
    dialogReducer: dialogSlice.reducer,
    authReducer: authSlice.reducer,
  },
});

export default store;
