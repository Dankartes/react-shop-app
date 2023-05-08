// import styles from './Products.module.css';
import ProductsList from '../components/ProductsList';
import ShopPagination from '../components/ShopPagination';
import { useLoaderData } from 'react-router-dom';
import ProductsFilter from '../components/ProductsFilter';
import { Grid } from '@mui/material';

const Products = () => {
  const data = useLoaderData();

  return (
   
      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <ProductsFilter />
        </Grid>

        <Grid item md={9} xs={12}>
          <ProductsList products={data.products} />
          <ShopPagination />
        </Grid>
      </Grid>
    
  );
};

export default Products;
