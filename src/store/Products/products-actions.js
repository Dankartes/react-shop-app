import {
  fetchProducts,
  addNewProduct,
  toggleFavorite,
  isLoading,
  stopLoading,
  deleteProduct,
  editProduct,
} from './products-slice';
import { openDialogBox } from '../Dialog/dialog-slice';
import { enqueueSnackbar } from 'notistack';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

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
      dispatch(stopLoading());
      dispatch(
        openDialogBox(
          `Cannot load products at this time, please try again later!`
        )
      );
    }
  };
};

// action creator thunk for adding a product to firebase
export const addNewProductThunk = productData => {
  return async dispatch => {
    const newProduct = { ...productData, favorited: false };
    try {
      dispatch(isLoading());
      const result = await fetch(
        'https://react-http-b5876-default-rtdb.europe-west1.firebasedatabase.app/products.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newProduct),
        }
      );
      const data = await result.json();

      newProduct.id = data.name;

      dispatch(addNewProduct(newProduct));
      dispatch(stopLoading());
      enqueueSnackbar('Product was added successfully!', {
        variant: 'success',
        iconVariant: {
          success: <AddIcon style={{ marginRight: '5px' }} />,
        },
      });
    } catch (error) {
      dispatch(
        openDialogBox({
          message: `Cannot add product at this time, please try again later!`,
          title: 'Error',
        })
      );
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

      await fetch(
        `https://react-http-b5876-default-rtdb.europe-west1.firebasedatabase.app/products/${productId}.json`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            favorited: !favoritedProduct.favorited,
          }),
        }
      );
      dispatch(toggleFavorite(productId));
      dispatch(stopLoading());
    } catch (error) {
      dispatch(
        openDialogBox(
          `Cannot use the favorite feature at this time, please try again later!`
        )
      );
      dispatch(stopLoading());
    }
  };
};

export const deleteProductThunk = productId => {
  return async dispatch => {
    try {
      dispatch(isLoading());
      await fetch(
        `https://react-http-b5876-default-rtdb.europe-west1.firebasedatabase.app/products/${productId}.json`,
        {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        }
      );
      dispatch(deleteProduct(productId));
      dispatch(stopLoading());
      enqueueSnackbar('Product was deleted successfully!', {
        variant: 'success',
        iconVariant: {
          success: <DeleteIcon style={{ marginRight: '5px' }} />,
        },
      });
    } catch (error) {
      dispatch(
        openDialogBox({
          message: `Cannot delete product at this time, please try again later!`,
          title: 'Error',
        })
      );
      dispatch(stopLoading());
    }
  };
};

export const editProductThunk = (productId, productData) => {
  return async dispatch => {
    try {
      dispatch(isLoading());
      await fetch(
        `https://react-http-b5876-default-rtdb.europe-west1.firebasedatabase.app/products/${productId}.json`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(productData),
        }
      );
      dispatch(editProduct({ productId, productData }));
      dispatch(stopLoading());
      enqueueSnackbar('Product was edited successfully!', {
        variant: 'success',
        iconVariant: {
          success: <EditIcon style={{ marginRight: '5px' }} />,
        },
      });
    } catch (error) {
      dispatch(
        openDialogBox({
          message: `Cannot edit product at this time, please try again later!`,
          title: 'Error',
        })
      );
      dispatch(stopLoading());
    }
  };
};
