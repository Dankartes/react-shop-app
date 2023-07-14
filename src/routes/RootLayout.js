import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/Navigation/NavigationBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProductsThunk } from '../store/Products/products-actions';
import { fetchCartThunk } from '../store/Cart/cart-actions';
import { SnackbarProvider, closeSnackbar } from 'notistack';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import BottomNavigation from '../components/Navigation/BottomNavigation';
import DialogBox from '../components/UI/DialogBox';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { autoLogin, logout } from '../store/Auth/auth-slice';
import { useState } from 'react';

const RootLayout = () => {
  const dispatch = useDispatch();
  // const overlaysPortal = document.getElementById('overlays');

  const userData = useSelector(state => state.authReducer);

  useEffect(() => {
    dispatch(fetchProductsThunk());
    dispatch(autoLogin());
  }, [dispatch]);

  useEffect(() => {
    if (userData.userId) {
      dispatch(fetchCartThunk(userData.userId, userData.idToken));
    }
  }, [dispatch, userData]);

  useEffect(() => {
    if (userData.userId)
      setTimeout(() => {
        dispatch(logout());
      }, userData.expiresIn * 1000);
  }, [userData, dispatch]);

  return (
    <div
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <NavigationBar />
      <div style={{ margin: '1%', display: 'flex', justifyContent: 'center' }}>
        <Outlet />
      </div>
      <BottomNavigation />
      <SnackbarProvider
        autoHideDuration={1500}
        maxSnack={3}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        action={snackbarId => (
          <IconButton
            sx={{
              color: 'white',
              paddingLeft: '0px',
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
            onClick={() => closeSnackbar(snackbarId)}
          >
            <CloseIcon />
          </IconButton>
        )}
      />
      <DialogBox />
    </div>
  );
};

export default RootLayout;
