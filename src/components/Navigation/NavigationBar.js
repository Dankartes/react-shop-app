import { AppBar, Container, Toolbar } from '@mui/material';
import CartButton from './CartButton';
import NormalResMenu from './NormalResMenu';
import SmallResMenu from './SmallResMenu';
import { useSelector } from 'react-redux';

export const pageLinks = [
  { page: 'Products', navLink: '/products/1' },
  { page: 'Admin panel', navLink: '/admin-panel/page/1' },
];

const NavigationBar = () => {
  const allProductsQuantity = useSelector(
    state => state.cartReducer.allProductsQuantity
  );

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar bar disableGutters>
          <NormalResMenu />
          <SmallResMenu />
          <CartButton quantity={allProductsQuantity} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavigationBar;
