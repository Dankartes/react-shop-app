import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/Navigation/NavigationBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProductsThunk } from '../store/Products/products-actions';
import { fetchCartThunk } from '../store/Cart/cart-actions';

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
    </>
  );
};

export default RootLayout;
