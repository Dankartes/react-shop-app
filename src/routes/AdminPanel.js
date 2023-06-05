import AdminProductList from '../components/Admin/AdminProductList';
import { Grid, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import ProductsPagination from '../components/UI/ProductsPagination';
import { useParams } from 'react-router-dom';
import AdminProductFilter from '../components/Admin/AdminProductFilter';
import { useSearchParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  const products = useSelector(state => state.productsReducer.products);
  const isLoading = useSelector(state => state.productsReducer.loading);

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
  const pageSize = 9;

  const from = (pageNumber - 1) * pageSize;
  const to = (pageNumber - 1) * pageSize + pageSize;

  const slicedProducts = modifiedProducts.slice(from, to);
  const count = modifiedProducts.length;

  return (
    <>
      {!isLoading && (
        <Grid sx={{ maxWidth: 'lg' }} container spacing={2}>
          <Grid item xs={12}>
            <AdminProductFilter />
          </Grid>
          <Grid item xs={12}>
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
            <AdminProductList products={slicedProducts} />
            <ProductsPagination
              count={count}
              pageSize={pageSize}
              currentPage={pageNumber}
              admin
            />
          </Grid>
        </Grid>
      )}
      {isLoading && <CircularProgress />}
    </>
  );
};

export default AdminPanel;
