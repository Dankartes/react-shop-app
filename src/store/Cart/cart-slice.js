import { createSlice } from '@reduxjs/toolkit';

const initialState = { cart: [], allProductsQuantity: 0, loading: false };

const cartSlice = createSlice({
  name: 'shopCart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newProductId = action.payload;
      const existingIndex = state.cart.findIndex(
        product => product.id === newProductId
      );

      if (existingIndex !== -1) state.cart[existingIndex].quantity++;
      else state.cart = [...state.cart, { id: action.payload, quantity: 1 }];
      state.allProductsQuantity++;
    },
    removeFromCart(state, action) {
      const removedId = action.payload;
      const removedIndex = state.cart.findIndex(
        product => product.id === removedId
      );

      if (state.cart[removedIndex].quantity === 1)
        state.cart.splice(removedIndex, 1);
      else state.cart[removedIndex].quantity--;
      state.allProductsQuantity--;
    },
    deleteItem(state, action) {
      const deletedId = action.payload;
      const deletedIndex = state.cart.findIndex(
        product => product.id === deletedId
      );
      state.allProductsQuantity =
        state.allProductsQuantity - state.cart[deletedIndex].quantity;
      state.cart.splice(deletedIndex, 1);
    },
  },
});

export default cartSlice;

export const { addToCart, removeFromCart, deleteItem } = cartSlice.actions;
