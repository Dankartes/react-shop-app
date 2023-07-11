import { createSlice } from '@reduxjs/toolkit';
import { removeItem } from '../Cart/cart-slice';

const initialState = {
  // email: null,
  // password: null,
  idToken: null,
  // userId: 'sUe6xHsFVEeeRoogehwl69q7DGg2',
  userId: null,
  expiresIn: null,
};

const authSlice = createSlice({
  name: 'shopAuth',
  initialState,
  reducers: {
    authenticate(state, action) {
      const userData = action.payload;

      console.log(userData);

      state.idToken = userData.idToken;
      state.userId = userData.localId;
      state.expiresIn = userData.expiresIn;

      localStorage.setItem('idToken', state.idToken);
      localStorage.setItem('userId', state.userId);
      localStorage.setItem('expiresIn', state.expiresIn);
    },
    autoLogin(state) {
      const idToken = localStorage.getItem('idToken');
      const userId = localStorage.getItem('userId');
      const expiresIn = localStorage.getItem('expiresIn');

      state.idToken = idToken;
      state.userId = userId;
      state.expiresIn = expiresIn;
    },
    logout(state) {
      console.log('teswtft');
      // state = {...initialState};
      console.log(state);
      localStorage.removeItem('idToken');
      localStorage.removeItem('userId');
      localStorage.removeItem('expiresIn');
    },
  },
});

export default authSlice;

export const { authenticate, logout, autoLogin } = authSlice.actions;
