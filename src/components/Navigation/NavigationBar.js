import { AppBar, Container, Toolbar } from '@mui/material';
import CartButton from './CartButton';
import NormalResMenu from './NormalResMenu';
import SmallResMenu from './SmallresMenu';
import { useSelector } from 'react-redux';

export const pageLinks = [
  { page: 'Products', navLink: '/products/1' },
  { page: 'Add product', navLink: '/add-product' },
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
