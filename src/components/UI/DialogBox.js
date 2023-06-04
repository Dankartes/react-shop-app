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

const DialogBox = () => {
  const { isOpen, message } = useSelector(state => state.dialogReducer);
  const dispatch = useDispatch();

  const closeDialogHandler = () => {
    dispatch(closeDialogBox());
  };

  return (
    <Dialog open={isOpen} onClose={closeDialogHandler}>
      <DialogTitle>Error</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialogHandler}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogBox;
