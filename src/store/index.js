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
export const fetchAllproducts = () => {
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
    } catch (error) {
      console.log(error);
      dispatch(stopLoading());
    }
  };
};

// action creator thunk for adding a product to firebase
export const sendProductData = productData => {
  return async dispatch => {
    const newProduct = { ...productData };
    console.log(newProduct);
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
  editProduct,
  fetchProducts,
  isLoading,
  stopLoading,
} = shopProductsSlice.actions;

export default store;
