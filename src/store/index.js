import { createSlice, configureStore } from '@reduxjs/toolkit';

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

// action creator thunk for fetching all products
export const fetchProductsThunk = () => {
  return async dispatch => {
    try {
      dispatch(isLoading());
      const response = await fetch(
        'https://react-http-b5876-default-rtdb.europe-west1.firebasedatabase.app/products.json'
      );
      const data = await response.json();

      let fetchedProducts = [];
      for (let key in data) fetchedProducts.push({ id: key, ...data[key] });

      dispatch(fetchProducts(fetchedProducts));
      dispatch(stopLoading());
    } catch (error) {
      console.log(error);
      dispatch(stopLoading());
    }
  };
};

// action creator thunk for adding a product to firebase
export const addNewProductThunk = productData => {
  return async dispatch => {
    const newProduct = { ...productData };
    try {
      dispatch(isLoading());
      await fetch(
        'https://react-http-b5876-default-rtdb.europe-west1.firebasedatabase.app/products.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newProduct),
        }
      );
      dispatch(addNewProduct(newProduct));
      dispatch(stopLoading());
    } catch (error) {
      console.log(error);
      dispatch(stopLoading());
    }
  };
};

// action creator thunk for adding a product to favorites
export const toggleFavoriteThunk = productId => {
  return async (dispatch, getState) => {
    try {
      dispatch(isLoading());

      const stateBefore = getState();
      const products = stateBefore.productsReducer.products;

      const favoritedProduct = {
        ...products.find(product => product.id === productId),
      };

      delete favoritedProduct.id;

      await fetch(
        `https://react-http-b5876-default-rtdb.europe-west1.firebasedatabase.app/products/${productId}.json`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...favoritedProduct,
            favorited: !favoritedProduct.favorited,
          }),
        }
      );
      dispatch(toggleFavorite(productId));
      dispatch(stopLoading());
    } catch (error) {
      console.log(error);
      dispatch(stopLoading());
    }
  };
};

const store = configureStore({
  reducer: { productsReducer: shopProductsSlice.reducer },
});

export const {
  addNewProduct,
  removeProduct,
  toggleFavorite,
  editProduct,
  fetchProducts,
  isLoading,
  stopLoading,
} = shopProductsSlice.actions;

export default store;
