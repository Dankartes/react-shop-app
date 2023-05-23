// import styles from './SingleProduct.module.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import { categories } from './ProductsFilter';
import { useDispatch } from 'react-redux';
import { toggleFavoriteThunk } from '../store/index';

const SingleProduct = ({ id, categoryId, name, price, image, favorited }) => {
  const displayHeader = () => {
    switch (categoryId) {
      case 1:
        return <Bed />;
        break;
      case 2:
        return <Checkroom />;
        break;

      case 3:
        return <EmojiFoodBeverage />;
        break;

      case 4:
        return <Celebration />;
        break;
    }
  };

  const categoryName = categories.find(
    category => category.value === categoryId
  ).name;

  const dispatch = useDispatch();

  const addToFavoritesHandler = () => {
    dispatch(toggleFavoriteThunk(id));
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
          {price}$
        </Typography>

        <ButtonGroup>
          <IconButton
            onClick={addToFavoritesHandler}
            aria-label="add to favorites"
          >
            <FavoriteIcon sx={{ color: favorited ? 'red' : '' }} />
          </IconButton>
          <IconButton aria-label="add to cart">
            <ShoppingCartIcon />
          </IconButton>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};

export default SingleProduct;
