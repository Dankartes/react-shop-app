import {
  addNewItem,
  addExistingItem,
  removeItem,
  deleteItem,
  fetchCart,
} from './cart-slice';

export const fetchCartThunk = () => {
  return async dispatch => {
    try {
      const result = await fetch(
        'https://react-http-b5876-default-rtdb.europe-west1.firebasedatabase.app/cart.json'
      );
      const data = await result.json();
      const cartItems = [];
      for (let key in data)
        cartItems.push({
          id: key,
          productId: data[key].productId,
          quantity: data[key].quantity,
        });
      dispatch(fetchCart(cartItems));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCartThunk = productId => {
  return async (dispatch, getState) => {
    try {
      const stateBefore = getState();
      const cart = stateBefore.cartReducer.cart;
      const existingItem = cart.find(item => item.productId === productId);

      if (existingItem) {
        await fetch(
          `https://react-http-b5876-default-rtdb.europe-west1.firebasedatabase.app/cart/${existingItem.id}.json`,
          {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ quantity: existingItem.quantity + 1 }),
          }
        );
        dispatch(addExistingItem(productId));
      } else {
        const result = await fetch(
          'https://react-http-b5876-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId: productId, quantity: 1 }),
          }
        );

        const data = await result.json();
        dispatch(addNewItem({ id: data.name, productId: productId }));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//second
export const removeFromCartThunk = (productId, toDelete = false) => {
  return async (dispatch, getState) => {
    try {
      const stateBefore = getState();
      const cart = stateBefore.cartReducer.cart;
      const existingItem = cart.find(item => item.productId === productId);

      if (existingItem.quantity === 1 || toDelete) {
        await fetch(
          `https://react-http-b5876-default-rtdb.europe-west1.firebasedatabase.app/cart/${existingItem.id}.json`,
          {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
          }
        );
        dispatch(deleteItem(productId));
      } else {
        await fetch(
          `https://react-http-b5876-default-rtdb.europe-west1.firebasedatabase.app/cart/${existingItem.id}.json`,
          {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ quantity: existingItem.quantity - 1 }),
          }
        );
        dispatch(removeItem(productId));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
