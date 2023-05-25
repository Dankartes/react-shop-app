import { createSlice } from '@reduxjs/toolkit';

const initialState = { products: [], loading: false };
const shopProductsSlice = createSlice({
  name: 'shopProducts',
  initialState,
  reducers: {
    fetchProducts(state, action) {
      state.products = action.payload;
      state.loading = false;
    },
    addNewProduct(state, action) {
      const product = action.payload;
      state.products = [...state.products, product];
      state.loading = false;
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

export default shopProductsSlice;

export const {
  fetchProducts,
  addNewProduct,
  toggleFavorite,
  isLoading,
  stopLoading,
  removeProduct,
  editProduct,
} = shopProductsSlice.actions;


