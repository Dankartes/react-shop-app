// import styles from './SingleProduct.module.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  CardActionArea,
  Typography,
} from '@mui/material';

const SingleProduct = ({ name, price, description, image }) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {price}$
        </Typography>
      </CardContent>

      <CardActions>
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
