import { AppBar, Container, Toolbar } from '@mui/material';
import CartButton from './CartButton';
import NormalResMenu from './NormalResMenu';
import SmallResMenu from './SmallResMenu';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { logout } from '../../store/Auth/auth-slice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export let pageLinks = [
  { page: 'Products', navLink: '/products/1', requiresLogin: false },
  { page: 'Admin panel', navLink: '/admin-panel/page/1', requiresLogin: true },
];

const NavigationBar = () => {
  const dispatch = useDispatch();

  const allProductsQuantity = useSelector(
    state => state.cartReducer.allProductsQuantity
  );

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar bar disableGutters>
          <NormalResMenu pageLinks={pageLinks} />
          <SmallResMenu pageLinks={pageLinks} />
          <CartButton quantity={allProductsQuantity} />
          <button
            onClick={() => {
              dispatch(logout());
            }}
          >
            LogOut
          </button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavigationBar;
