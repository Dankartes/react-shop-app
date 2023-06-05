import { Grid } from '@mui/material';

import AdminProductCard from './AdminProductCard';

const AdminProductList = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map(product => (
        <Grid key={product.id} item lg={4} md={6} xs={12}>
          <AdminProductCard
            id={product.id}
            image={product.image}
            name={product.name}
            categoryId={product.categoryId}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default AdminProductList;
