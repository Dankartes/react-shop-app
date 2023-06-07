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

    deleteProduct(state, action) {
      const deletedId = action.payload;
      const deletedIndex = state.products.findIndex(
        product => product.id === deletedId
      );
      state.products.splice(deletedIndex, 1);
    },
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
  deleteProduct,
  editProduct,
} = productsSlice.actions;
