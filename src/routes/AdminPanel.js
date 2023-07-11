import AdminProductList from '../components/Admin/AdminProductList';
import { Grid, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import ProductsPagination from '../components/UI/ProductsPagination';
import { useNavigate, useParams } from 'react-router-dom';
import AdminProductFilter from '../components/Admin/AdminProductFilter';
import { useSearchParams } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const adminPageSize = 9;

const AdminPanel = () => {
  const userId = useSelector(state => state.authReducer.userId);
  const products = useSelector(state => state.productsReducer.products);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) navigate('/login');
  }, [navigate, userId]);

  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');
  const categoryId = +searchParams.get('categoryId');

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

  //slicing the products
  const { pageNumber } = useParams();

  const from = (pageNumber - 1) * adminPageSize;
  const to = (pageNumber - 1) * adminPageSize + adminPageSize;

  const slicedProducts = modifiedProducts.slice(from, to);
  const count = modifiedProducts.length;

  return (
    <Grid sx={{ maxWidth: 'lg' }} container spacing={2}>
      <Grid item xs={12}>
        <AdminProductFilter />
      </Grid>
      <Grid sx={{ display: 'flex', justifyContent: 'flex-end' }} item xs={12}>
        <Button
          to="/add-product"
          component={Link}
          startIcon={<AddIcon />}
          variant="contained"
          sx={{
            '&:hover': {
              color: 'white',
            },
          }}
        >
          Add new product
        </Button>
      </Grid>
      <Grid item xs={12}>
        <AdminProductList pageNumber={pageNumber} products={slicedProducts} />
        <ProductsPagination
          count={count}
          pageSize={adminPageSize}
          currentPage={pageNumber}
          admin
        />
      </Grid>
    </Grid>
  );
};

export default AdminPanel;
