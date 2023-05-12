import { createSlice, configureStore } from '@reduxjs/toolkit';
import { configure } from '@testing-library/react';

const initialState = { products: {}, count: 69 };

const shopProductsSlice = createSlice({
  name: 'shopProducts',
  initialState,
  reducers: {
    addProduct(state, action) {
      console.log('test');
    },
    removeProduct(state, action) {},
    editProduct(state, action) {},
  },
});

const store = configureStore({
  reducer: { productsReducer: shopProductsSlice.reducer },
});

export const { addProduct, removeProduct, editProduct } =
  shopProductsSlice.actions;

export default store;
