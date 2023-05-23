import styles from './SingleProductDetails.module.css';
import { Button, ButtonGroup, CardActions } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { categories } from './ProductsFilter';

const SingleProductDetails = () => {
  const { productId } = useParams();
  const products = useSelector(state => state.productsReducer.products);

  const currentProduct = products.find(product => product.id === productId);

  let categoryName;

  if (currentProduct)
    categoryName = categories.find(
      category => category.value === currentProduct.categoryId
    ).name;

  const productDetails = currentProduct ? (
    <div className={styles['product-container']}>
      <div className={styles.imgBox}>
        <img
          style={{ objectFit: 'contain', height: 500, width: 500 }}
          src={currentProduct.image}
          alt="Product"
        />
      </div>

      <div className={styles.details}>
        <div>
          <h2>
            {currentProduct.name}
            <br />
            <span>{categoryName}</span>
          </h2>
          <p>{currentProduct.description}</p>

          <CardActions
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <h3>{currentProduct.price}$</h3>
            <ButtonGroup>
              <Button variant="outlined" startIcon={<FavoriteIcon />}>
                Favorite
              </Button>
              <Button
                sx={{ marginLeft: 5 }}
                variant="contained"
                disableElevation
                startIcon={<ShoppingCartIcon />}
              >
                Add
              </Button>
            </ButtonGroup>
          </CardActions>
        </div>
      </div>
    </div>
  ) : (
    ''
  );

  return productDetails;
};

// export const loader = async ({ params }) => {
//   const productName = params.productName;

//   try {
//     const response = await fetch(
//       `https://react-http-b5876-default-rtdb.europe-west1.firebasedatabase.app/products.json?orderBy="name"&equalTo="${productName}"`
//     );

//     const data = response.json();

//     data

//   } catch (error) {
//     console.log(error);
//   }
//   return null;
// };

export default SingleProductDetails;
