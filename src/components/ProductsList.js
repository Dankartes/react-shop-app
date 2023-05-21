import SingleProduct from './SingleProduct';
import { Grid } from '@mui/material';
// import styles from './ProductsList.module.css';

const ProductsList = ({ products }) => {
  const list = products.map(product => (
    <Grid key={product.id} item xs={12} sm={6} md={4}>
      <SingleProduct
        id={product.id}
        name={product.name}
        price={product.price}
        image={product.image}
        categoryId={product.categoryId}
      />
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {list}
    </Grid>
  );
};

export default ProductsList;
