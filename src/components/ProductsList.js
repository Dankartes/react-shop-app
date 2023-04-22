import SingleProduct from './SingleProduct';
import { Grid } from '@mui/material';
// import styles from './ProductsList.module.css';

const ProductsList = ({ products }) => {
  const list = products.map(product => (
    <Grid key={product.id} item xs={6} md={4}>
      <SingleProduct
        name={product.name}
        price={product.price}
        description={product.description}
        image={product.image}
      />
    </Grid>
  ));

  return (
    <Grid container rowSpacing={2}>
      {list}
    </Grid>
  );
};

export default ProductsList;
