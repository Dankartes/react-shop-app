import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { closeDialogBox } from '../../store/Dialog/dialog-slice';
import { deleteProductThunk } from '../../store/Products/products-actions';

const DialogBox = () => {
  const { isOpen, message, title, confirmFunction, confirmFunctionPayload } =
    useSelector(state => state.dialogReducer);
  const dispatch = useDispatch();

  const closeDialogHandler = () => {
    dispatch(closeDialogBox());
  };

  const deleteProduct = () => {
    dispatch(deleteProductThunk(confirmFunctionPayload));
    dispatch(closeDialogBox());
  };

  let confirmHandler;

  switch (confirmFunction) {
    case 'deleteProduct':
      confirmHandler = deleteProduct;
      break;

    default:
      confirmHandler = null;
  }

  return (
    <Dialog fullWidth open={isOpen} onClose={closeDialogHandler}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialogHandler}>
          {confirmFunction ? 'Cancel' : 'Close'}
        </Button>
        {confirmFunction && (
          <Button onClick={confirmHandler} variant="outlined">
            Confirm
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default DialogBox;
