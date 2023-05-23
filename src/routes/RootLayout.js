import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProductsThunk } from '../store/index';
// import { useSelector } from 'react-redux';
// import { CircularProgress } from '@mui/material';

const RootLayout = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(state => state.productsReducer.loading);
  // fetching products from redux
  useEffect(() => {
    dispatch(fetchProductsThunk());
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
