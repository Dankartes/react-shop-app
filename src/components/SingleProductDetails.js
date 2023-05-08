import styles from './SingleProductDetails.module.css';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  ButtonGroup,
  Typography,
  IconButton,
  Grid,
  Container,
  Divider,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

const SingleProductDetails = () => {
  return (
    <div className={styles['product-container']}>
      <div className={styles.imgBx}>
        <img
          src="https://i5.walmartimages.ca/images/Enlarge/234/6_r/6000191272346_R.jpg"
          alt="Product"
        />
      </div>

      <div className={styles.details}>
        <div>
          <h2>
            Jordan Proto-Lyte
            <br />
            <span>Running Collection</span>
          </h2>
          <p>
            Featuring soft foam cushioning and lightweight, woven fabric in the
            upper, the Jordan Proto-Lyte is made for all-day, bouncy comfort.
            Lightweight Breathability: Lightweight woven fabric with real or
            synthetic leather provides breathable support. Cushioned Comfort: A
            full-length foam midsole delivers lightweight, plush cushioning.
            Secure Traction: Exaggerated herringbone-pattern outsole offers
            traction on a variety of surfaces.
          </p>

          <CardActions
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <h3>200$</h3>
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
  );
};

export default SingleProductDetails;
