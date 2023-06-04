import styles from './SingleProductDetails.module.css';
import { Button, ButtonGroup, CardActions } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { categories } from '../Products/ProductsFilter';
import { addToCartThunk } from '../../store/Cart/cart-actions';
import { toggleFavoriteThunk } from '../../store/Products/products-actions';
import { useDispatch } from 'react-redux';
import { enqueueSnackbar } from 'notistack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import { CircularProgress } from '@mui/material';

const SingleProductDetails = () => {
  const { productId } = useParams();
  const products = useSelector(state => state.productsReducer.products);

  const currentProduct = products.find(product => product.id === productId);

  let categoryName;

  if (currentProduct)
    categoryName = categories.find(
      category => category.value === currentProduct.categoryId
    ).name;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    enqueueSnackbar('Product was added to cart!', {
      variant: 'success',
      iconVariant: {
        success: <AddShoppingCartIcon style={{ marginRight: '5px' }} />,
      },
    });
    dispatch(addToCartThunk(productId));
  };

  const toggleFavoriteHandler = () => {
    let messageInfo = {
      message: 'Product was added to favorites!',
      icon: <FavoriteIcon style={{ marginRight: '5px' }} />,
      variant: 'success',
    };

    if (currentProduct.favorited)
      messageInfo = {
        message: 'Product was removed from favorites!',
        icon: <HeartBrokenIcon style={{ marginRight: '5px' }} />,
        variant: 'error',
      };

    enqueueSnackbar(messageInfo.message, {
      variant: messageInfo.variant,
      iconVariant: {
        [messageInfo.variant]: messageInfo.icon,
      },
    });
    dispatch(toggleFavoriteThunk(productId));
  };

  if (!currentProduct) return <CircularProgress />;

  return (
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
            <h3>${currentProduct.price}</h3>
            <ButtonGroup>
              <Button
                sx={
                  currentProduct.favorited && {
                    color: 'red',
                    borderColor: 'red',
                    '&:hover': {
                      borderColor: 'red',
                    },
                  }
                }
                variant="outlined"
                startIcon={<FavoriteIcon />}
                onClick={toggleFavoriteHandler}
              >
                Favorite
              </Button>
              <Button
                sx={{ marginLeft: 5 }}
                variant="contained"
                disableElevation
                startIcon={<ShoppingCartIcon />}
                onClick={addToCartHandler}
              >
                Add
              </Button>
            </ButtonGroup>
          </CardActions>
        </div>
      </div>
    </div>
  );
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
