import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  idToken: null,
  userId: null,
  expiresIn: null,
};

const authSlice = createSlice({
  name: 'shopAuth',
  initialState,
  reducers: {
    authenticate(state, action) {
      const userData = action.payload;

      state.idToken = userData.idToken;
      state.userId = userData.localId;
      state.expiresIn = userData.expiresIn;
      state.email = userData.email;

      localStorage.setItem('idToken', state.idToken);
      localStorage.setItem('userId', state.userId);
      localStorage.setItem('expiresIn', state.expiresIn);
      localStorage.setItem('email', state.email);
    },
    autoLogin(state) {
      const idToken = localStorage.getItem('idToken');
      const userId = localStorage.getItem('userId');
      const expiresIn = localStorage.getItem('expiresIn');
      const email = localStorage.getItem('email');

      state.idToken = idToken;
      state.userId = userId;
      state.expiresIn = expiresIn;
      state.email = email;
    },
    logout(state) {
      state.idToken = null;
      state.userId = null;
      state.expiresIn = null;
      state.email = null;

      localStorage.removeItem('idToken');
      localStorage.removeItem('userId');
      localStorage.removeItem('expiresIn');
      localStorage.removeItem('email');
    },
  },
});

export default authSlice;

export const { authenticate, logout, autoLogin } = authSlice.actions;
