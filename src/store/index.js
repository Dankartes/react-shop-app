import { configureStore } from '@reduxjs/toolkit';
import shopProductsSlice from './Products/products-slice';

const store = configureStore({
  reducer: { productsReducer: shopProductsSlice.reducer },
});

export default store;
