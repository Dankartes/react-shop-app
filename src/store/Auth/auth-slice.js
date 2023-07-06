import { createSlice } from '@reduxjs/toolkit';

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

      state.idToken = userData.idToken;
      state.userId = userData.localId;
      state.expiresIn = userData.expiresIn;

      console.log(state.idToken, state.localId, state.expiresIn);
    },
    logout(state, action) {},
  },
});

export default authSlice;

export const { authenticate, logout } = authSlice.actions;
