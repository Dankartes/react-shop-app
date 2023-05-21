import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllproducts } from '../store/index';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

const RootLayout = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.productsReducer.loading);
  // fetching products from redux
  useEffect(() => {
    dispatch(fetchAllproducts());
  }, [dispatch]);

  return (
    <>
      <NavigationBar />
      <div style={{ margin: '1%', display: 'flex', justifyContent: 'center' }}>
        {!isLoading && <Outlet />}
        {isLoading && <CircularProgress />}
      </div>
    </>
  );
};

export default RootLayout;
