import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from '@reduxjs/toolkit';

const initialState = { products: [], count: 0 };
const shopProductsSlice = createSlice({
  name: 'shopProducts',
  initialState,
  reducers: {
    addProduct(state, action) {
      const product = action.payload;
      state.products = [...state.products, product];
      state.count++;
    },
    removeProduct(state, action) {},
    editProduct(state, action) {},
  },
});

export const sendProductData = createAsyncThunk(
  'shopProducts/sendProductData',
  async (productData, thunkAPI) => {
    const newProduct = { ...productData };

    try {
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

      thunkAPI.dispatch(addProduct(newProduct));
    } catch (error) {
      console.log(error);
    }
  }
);

// action creator thunk for adding a product to firebase
// export const sendProductData = productData => {
//   return async dispatch => {
//     const newProduct = { ...productData };

//     try {
//       await fetch(
//         'https://react-http-b5876-default-rtdb.europe-west1.firebasedatabase.app/products.json',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(newProduct),
//         }
//       );
//       dispatch(addProduct(newProduct));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

const store = configureStore({
  reducer: { productsReducer: shopProductsSlice.reducer },
});

export const { addProduct, removeProduct, editProduct } =
  shopProductsSlice.actions;

export default store;
