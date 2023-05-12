import styles from './SingleProductDetails.module.css';
import { Button, ButtonGroup, CardActions } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

const SingleProductDetails = () => {
  return (
    <div className={styles['product-container']}>
      <div className={styles.imgBox}>
        <img
          style={{ objectFit: 'contain', height: 500 }}
          src="image"
          alt="Product"
        />
      </div>

      <div className={styles.details}>
        <div>
          <h2>
            nume
            <br />
            <span>PLACEHOLDER</span>
          </h2>
          <p>descr</p>

          <CardActions
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <h3>price$</h3>
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
