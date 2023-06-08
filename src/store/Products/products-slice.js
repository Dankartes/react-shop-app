import { createSlice } from '@reduxjs/toolkit';

const initialState = { products: [], loading: false, editedProduct: null };
const productsSlice = createSlice({
  name: 'shopProducts',
  initialState,
  reducers: {
    fetchProducts(state, action) {
      state.products = action.payload;
    },
    addNewProduct(state, action) {
      const newProduct = action.payload;
      state.products = [...state.products, newProduct];
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

    editProduct(state, action) {
      const editedId = action.payload.productId;
      const editedData = action.payload.productData;
      const editedProduct = state.products.find(
        product => product.id === editedId
      );
      Object.assign(editedProduct, editedData);
    },
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
  fetchEditedProduct,
  clearEditedProduct,
  editProduct,
} = productsSlice.actions;
