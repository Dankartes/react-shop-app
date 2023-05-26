import { Card, CardHeader, Divider, CardContent } from '@mui/material';
import CartList from '../components/Cart/CartList';

const Cart = () => {
  return (
    <>
      <Card>
        <CardHeader title="Shopping Cart" />
        <Divider sx={{ backgroundColor: 'black' }} />
        <CartList />
      </Card>
    </>
  );
};

export default Cart;
