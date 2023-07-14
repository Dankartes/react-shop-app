import { AppBar, Container, Toolbar } from '@mui/material';
import CartButton from './CartButton';
import NormalResMenu from './NormalResMenu';
import SmallResMenu from './SmallResMenu';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { logout } from '../../store/Auth/auth-slice';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../store/Cart/cart-slice';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

export let pageLinks = [
  { page: 'Products', navLink: '/products/1', requiresLogin: false },
  { page: 'Admin panel', navLink: '/admin-panel/page/1', requiresLogin: true },
];

const NavigationBar = () => {
  const dispatch = useDispatch();

  const allProductsQuantity = useSelector(
    state => state.cartReducer.allProductsQuantity
  );

  const isLoggedIn = useSelector(state => state.authReducer.userId);

  useEffect(() => {
    if (!isLoggedIn) dispatch(clearCart());
  }, [dispatch, isLoggedIn]);

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar bar disableGutters>
          <NormalResMenu />
          <SmallResMenu pageLinks={pageLinks} />
          <CartButton quantity={allProductsQuantity} />
          {isLoggedIn && (
            <Button
              variant="text"
              sx={{ color: 'white', marginLeft: '5px' }}
              onClick={() => {
                dispatch(logout());
              }}
              startIcon={<LogoutIcon />}
            >
              Logout
            </Button>
          )}
          {!isLoggedIn && (
            <Button
              startIcon={<LoginIcon />}
              component={Link}
              sx={{
                marginLeft: '5px',
                color: 'white !important',
                textDecoration: 'none',
              }}
              to="/login"
            >
              LOGIN
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavigationBar;
