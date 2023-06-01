import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/Navigation/NavigationBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProductsThunk } from '../store/Products/products-actions';
import { fetchCartThunk } from '../store/Cart/cart-actions';
import { SnackbarProvider, closeSnackbar } from 'notistack';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const RootLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCartThunk());
  }, [dispatch]);

  return (
    <>
      <NavigationBar />
      <div style={{ margin: '1%', display: 'flex', justifyContent: 'center' }}>
        <Outlet />
      </div>
      <SnackbarProvider
        autoHideDuration={1500}
        maxSnack={3}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        action={snackbarId => (
          <IconButton
            sx={{ paddingLeft: 0 }}
            onClick={() => closeSnackbar(snackbarId)}
          >
            <CloseIcon />
          </IconButton>
        )}
      />
    </>
  );
};

export default RootLayout;
