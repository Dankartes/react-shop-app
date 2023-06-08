import { Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import AdminProductCard from './AdminProductCard';
import { useSelector } from 'react-redux';

const AdminProductList = ({ products, pageNumber }) => {
  const isLoading = useSelector(state => state.productsReducer.loading);

  return (
    <>
      {!isLoading && (
        <Grid container spacing={2}>
          {products.map(product => (
            <Grid key={product.id} item lg={4} md={6} xs={12}>
              <AdminProductCard
                id={product.id}
                image={product.image}
                name={product.name}
                categoryId={product.categoryId}
                pageNumber={pageNumber}
              />
            </Grid>
          ))}
        </Grid>
      )}
      {isLoading && <CircularProgress />}
    </>
  );
};

export default AdminProductList;
