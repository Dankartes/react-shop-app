import { AppBar, Container, Toolbar } from '@mui/material';
import CartButton from './CartButton';
import NormalResMenu from './NormalResMenu';
import SmallResMenu from './SmallresMenu';

export const pageLinks = [
  { page: 'Products', navLink: '/products/1' },
  { page: 'Add product', navLink: '/add-product' },
];

const NavigationBar = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar bar disableGutters>
          <NormalResMenu />
          <SmallResMenu />
          <CartButton quantity={3} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavigationBar;
