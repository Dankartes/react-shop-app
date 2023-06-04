import { createSlice } from '@reduxjs/toolkit';

const initialState = { message: '', isOpen: false };

const dialogSlice = createSlice({
  name: 'shopDialog',
  initialState,
  reducers: {
    openDialogBox(state, action) {
      state.isOpen = true;
      state.message = action.payload;
    },
    closeDialogBox(state) {
      state.isOpen = false;
    },
  },
});

export default dialogSlice;

export const { openDialogBox, closeDialogBox } = dialogSlice.actions;
