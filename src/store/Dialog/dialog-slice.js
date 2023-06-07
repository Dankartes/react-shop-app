import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  title: '',
  isOpen: false,
  confirmFunction: '',
  confirmFunctionPayload: null,
};

const dialogSlice = createSlice({
  name: 'shopDialog',
  initialState,
  reducers: {
    openDialogBox(state, action) {
      state.isOpen = true;
      state.title = action.payload.title;
      state.message = action.payload.message;
      state.confirmFunction = action.payload.confirmFunction;
      state.confirmFunctionPayload = action.payload.confirmFunctionPayload;
    },
    closeDialogBox(state) {
      state.isOpen = false;
      state.confirmFunction = '';
      state.confirmFunctionPayload = null;
    },
  },
});

export default dialogSlice;

export const { openDialogBox, closeDialogBox } = dialogSlice.actions;
