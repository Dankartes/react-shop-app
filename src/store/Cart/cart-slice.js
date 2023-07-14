import { createSlice } from '@reduxjs/toolkit';

const initialState = { cart: [], allProductsQuantity: 0, loading: false };

const cartSlice = createSlice({
  name: 'shopCart',
  initialState,
  reducers: {
    fetchCart(state, action) {
      state.cart = action.payload;

      state.allProductsQuantity = action.payload.reduce(
        (totalQuantity, value) => totalQuantity + value.quantity,
        0
      );

      // state.allProductsQuantity = action.payload.length;
    },
    addNewItem(state, action) {
      const newItem = {
        id: action.payload.id,
        productId: action.payload.productId,
        quantity: 1,
      };
      state.cart.push(newItem);
      state.allProductsQuantity++;
    },

    addExistingItem(state, action) {
      const productId = action.payload;
      const existingItem = state.cart.find(
        item => item.productId === productId
      );
      existingItem.quantity++;
      state.allProductsQuantity++;
    },

    removeItem(state, action) {
      const productId = action.payload;
      const existingItem = state.cart.find(
        item => item.productId === productId
      );
      existingItem.quantity--;
      state.allProductsQuantity--;
    },

    deleteItem(state, action) {
      const productId = action.payload;
      const deletedIndex = state.cart.findIndex(
        item => item.productId === productId
      );

      state.allProductsQuantity =
        state.allProductsQuantity - state.cart[deletedIndex].quantity;

      state.cart.splice(deletedIndex, 1);
    },
    clearCart(state) {
      state.cart = [];
      state.allProductsQuantity = 0;
      state.loading = false;
    },
    isLoading(state) {
      state.loading = true;
    },
    stopLoading(state) {
      state.loading = false;
    },
  },
});

export default cartSlice;

export const {
  fetchCart,
  addNewItem,
  addExistingItem,
  removeItem,
  deleteItem,
  isLoading,
  stopLoading,
  clearCart,
} = cartSlice.actions;
