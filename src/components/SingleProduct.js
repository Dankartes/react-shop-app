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

const SingleProduct = ({ id, categoryId, name, price, image }) => {
  const displayHeader = () => {
    switch (categoryId) {
      case 1:
        return { icon: <Bed />, color: 'green' };
        break;
      case 2:
        return { icon: <Checkroom />, color: 'brown' };
        break;

      case 3:
        return { icon: <EmojiFoodBeverage />, color: 'turquoise' };
        break;

      case 4:
        return { icon: <Celebration />, color: 'yellow' };
        break;
    }
  };

  const categoryName = categories.find(
    category => category.value === categoryId
  ).name;

  return (
    <Card sx={{ maxHeight: 400 }}>
      <CardHeader
        sx={{ color: displayHeader().color }}
        title={categoryName}
        avatar={displayHeader().icon}
      />

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
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
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
