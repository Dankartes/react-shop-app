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
  Button,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

const SingleProduct = ({ id, name, price, image }) => {
  return (
    <Card sx={{ maxHeight: 400 }}>
      <Button component={Link} to={`/item/${id}`}>
        Test
      </Button>

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
        <Divider sx={{ backgroundColor: 'black' }}></Divider>
      </CardContent>
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
