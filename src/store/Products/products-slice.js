import { createSlice } from '@reduxjs/toolkit';

const initialState = { products: [], loading: false };
const productsSlice = createSlice({
  name: 'shopProducts',
  initialState,
  reducers: {
    fetchProducts(state, action) {
      state.products = action.payload;
    },
    addNewProduct(state, action) {
      const product = action.payload;
      state.products = [...state.products, product];
    },
    toggleFavorite(state, action) {
      const productId = action.payload;
      const index = state.products.findIndex(
        product => product.id === productId
      );
      state.products[index].favorited = !state.products[index].favorited;
    },
    isLoading(state) {
      state.loading = true;
    },
    stopLoading(state) {
      state.loading = false;
    },

    removeProduct(state, action) {},
    editProduct(state, action) {},
  },
});

export default productsSlice;

export const {
  fetchProducts,
  addNewProduct,
  toggleFavorite,
  isLoading,
  stopLoading,
  removeProduct,
  editProduct,
} = productsSlice.actions;
