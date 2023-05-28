import { useSelector } from 'react-redux';
import { categories } from '../ProductsFilter';
import CartItem from './CartItem';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Button, Box, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const CartList = () => {
  const cart = useSelector(state => state.cartReducer.cart);
  const products = useSelector(state => state.productsReducer.products);
  const cartItems = [];

  cart.forEach(cartItem => {
    const product = products.find(product => product.id === cartItem.productId);

    const categoryName = categories.find(
      category => category.value === product.categoryId
    ).name;

    cartItems.push({
      ...cartItem,
      name: product.name,
      categoryName,
      price: product.price,
      image: product.image,
    });
  });

  const totalPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const list = cart.length ? (
    <>
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          productId={item.productId}
          image={item.image}
          name={item.name}
          categoryName={item.categoryName}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
      <section style={{ padding: '15px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2>Total: ${totalPrice}</h2>

          <Button variant="outlined" startIcon={<ShoppingCartCheckoutIcon />}>
            Checkout
          </Button>
        </Box>
      </section>
    </>
  ) : (
    <Card>
      <CardContent sx={{ textAlign: 'center' }}>
        <h4>No products in your cart!</h4>
        <h4>
          Click{' '}
          <Link style={{ textDecoration: 'none' }} to="/products/1">
            here
          </Link>{' '}
          to browser our catalog!
        </h4>
      </CardContent>
    </Card>
  );

  return list;
};

export default CartList;
