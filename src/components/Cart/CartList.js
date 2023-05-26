import { useSelector } from 'react-redux';
import { categories } from '../ProductsFilter';
import CartItem from './CartItem';

const CartList = () => {
  const cart = useSelector(state => state.cartReducer.cart);
  const products = useSelector(state => state.productsReducer.products);
  const cartItems = [];

  cart.forEach(cartProduct => {
    const product = products.find(product => product.id === cartProduct.id);

    const categoryName = categories.find(
      category => category.value === product.categoryId
    ).name;

    cartItems.push({
      ...cartProduct,
      name: product.name,
      categoryName,
      price: product.price,
      image: product.image,
    });
  });

  return (
    <>
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          categoryName={item.categoryName}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </>
  );
};

export default CartList;
