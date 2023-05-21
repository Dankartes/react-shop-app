// import styles from './Products.module.css';
import ProductsList from '../components/ProductsList';
import ShopPagination from '../components/ShopPagination';
import ProductsFilter from '../components/ProductsFilter';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';

const Products = () => {
  // --logic for displaying different pages--

  const products = useSelector(state => state.productsReducer.products);

  // filtering the products
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');
  const minPrice = +searchParams.get('min-price');
  const maxPrice = +searchParams.get('max-price');
  const categoryId = +searchParams.get('category');
  let modifiedProducts = [...products];

  if (name) {
    modifiedProducts = modifiedProducts.filter(product =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (categoryId) {
    modifiedProducts = modifiedProducts.filter(
      product => product.categoryId === categoryId
    );
  }

  if (minPrice && maxPrice) {
    modifiedProducts = modifiedProducts.filter(
      product => product.price >= minPrice && product.price <= maxPrice
    );
  }

  // slicing the products
  const { pageNumber } = useParams();
  const pageSize = 6;
  const from = (pageNumber - 1) * pageSize;
  const to = (pageNumber - 1) * pageSize + pageSize;

  const slicedProducts = modifiedProducts.slice(from, to);
  const count = modifiedProducts.length;

  return (
    <Grid container spacing={2}>
      <Grid item md={3} xs={12}>
        <ProductsFilter />
      </Grid>

      <Grid item md={9} xs={12}>
        <ProductsList products={slicedProducts} />
        <ShopPagination
          count={count}
          pageSize={pageSize}
          currentPage={pageNumber}
        />
      </Grid>
    </Grid>
  );
};

export default Products;
