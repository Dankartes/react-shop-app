// import styles from './SingleProduct.module.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// import {
//   Card,
//   CardContent,
//   CardMedia,
//   CardActions,
//   Button,
//   CardActionArea,
// } from '@mui/material';

import { Card, Button } from 'react-bootstrap';

const SingleProduct = ({ name, price, description, image }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />

      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}$</Card.Text>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleProduct;
