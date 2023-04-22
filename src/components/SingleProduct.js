// import styles from './SingleProduct.module.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  CardActionArea,
} from '@mui/material';

const SingleProduct = ({ name, price, description, image }) => {
  return (
      <Card sx={{ maxWidth: 345, minWidth: 200 }}>
        <CardActionArea>
          <CardMedia sx={{ height: 140 }} image={image} />

          <CardContent>
            <h2>{name}</h2>
            <div>{price}$</div>
          </CardContent>
        </CardActionArea>

        <CardActions style={{ float: 'right' }}>
          <Button
            startIcon={<ShoppingCartIcon />}
            size="small"
            variant="outlined"
          >
            Add
          </Button>
        </CardActions>
      </Card>
  );
};

export default SingleProduct;
