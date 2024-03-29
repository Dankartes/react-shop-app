// import styles from './SingleProduct.module.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { enqueueSnackbar } from 'notistack';
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Divider,
  IconButton,
  ButtonGroup,
  CardActionArea,
  CardHeader,
} from '@mui/material';
import {
  Bed,
  Checkroom,
  EmojiFoodBeverage,
  Celebration,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { categories } from './ProductsFilter';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavoriteThunk } from '../../store/Products/products-actions';
import { addToCartThunk } from '../../store/Cart/cart-actions';
import PersonIcon from '@mui/icons-material/Person';

const SingleProduct = ({ id, categoryId, name, price, image, favorited }) => {
  const displayHeader = () => {
    switch (categoryId) {
      case 1:
        return <Bed />;

      case 2:
        return <Checkroom />;

      case 3:
        return <EmojiFoodBeverage />;

      case 4:
        return <Celebration />;

      default:
        return null;
    }
  };

  const categoryName = categories.find(
    category => category.value === categoryId
  ).name;

  const dispatch = useDispatch();

  const addToFavoritesHandler = () => {
    let messageInfo = {
      message: 'Product was added to favorites!',
      icon: <FavoriteIcon style={{ marginRight: '5px' }} />,
      variant: 'success',
    };

    if (favorited)
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

    dispatch(toggleFavoriteThunk(id));
  };

  const userData = useSelector(state => state.authReducer);

  const addToCartHandler = () => {
    if (userData.userId)
      dispatch(addToCartThunk(id, userData.userId, userData.idToken));
    else
      enqueueSnackbar('You must be logged in to add products to your cart!', {
        variant: 'error',
        iconVariant: {
          error: <PersonIcon style={{ marginRight: '5px' }} />,
        },
      });
  };

  return (
    <Card sx={{ maxHeight: 400 }}>
      <CardHeader
        sx={{ color: 'orange' }}
        title={categoryName}
        avatar={displayHeader()}
      />
      <Divider sx={{ backgroundColor: 'black' }}></Divider>
      <CardActionArea component={Link} to={`/item/${id}`}>
        <CardMedia
          sx={{ height: 200, objectFit: 'contain' }}
          image={image}
          alt="product"
          component="img"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider sx={{ backgroundColor: 'black' }}></Divider>

      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography sx={{ color: 'orange' }} variant="h5" component="div">
          ${price}
        </Typography>

        <ButtonGroup>
          <IconButton
            onClick={addToFavoritesHandler}
            aria-label="add to favorites"
          >
            <FavoriteIcon sx={{ color: favorited ? 'red' : '' }} />
          </IconButton>
          <IconButton
            onClick={addToCartHandler}
            color="primary"
            aria-label="add to cart"
          >
            <ShoppingCartIcon />
          </IconButton>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};

export default SingleProduct;
