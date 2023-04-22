// import styles from './Products.module.css';
import ProductsList from '../components/ProductsList';
import ShopPagination from '../components/ShopPagination';
import { useLoaderData } from 'react-router-dom';
import ProductsFilter from '../components/ProductsFilter';
import { Grid } from '@mui/material';

const Products = () => {
  const data = useLoaderData();

  // console.log(data);

  return (
    <Grid container spacing={2}>
      <Grid md={3} item>
        <ProductsFilter />
      </Grid>
      <Grid md={9} item>
        <ProductsList products={data.products} />
        <ShopPagination />
      </Grid>
    </Grid>
  );
};

export default Products;
