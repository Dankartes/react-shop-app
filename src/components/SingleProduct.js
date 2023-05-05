// import styles from './SingleProduct.module.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
  Divider,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const SingleProduct = ({ name, price, description, image }) => {
  return (
    <Card sx={{ maxHeight: 400 }}>
      <CardMedia
        sx={{ height: 200, objectFit: 'contain' }}
        image={image}
        alt="product"
        component="img"
      />
      <Divider variant="middle">
        <FavoriteIcon />
      </Divider>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ color: 'orange' }} variant="h5" component="div">
          {price}$
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          variant="outlined"
          startIcon={<ShoppingCartIcon />}
          size="small"
        >
          Add
        </Button>
      </CardActions>
    </Card>
  );
};

export default SingleProduct;
