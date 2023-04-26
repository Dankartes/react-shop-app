import SingleProduct from './SingleProduct';
import { Row, Col, Container } from 'react-bootstrap';

// import styles from './ProductsList.module.css';

const ProductsList = ({ products }) => {
  const list = products.map(product => (
    <Col key={product.id} >
      <SingleProduct
        name={product.name}
        price={product.price}
        description={product.description}
        image={product.image}
      />
    </Col>
  ));

  return (
    <Container fluid>
      <Row xs={2} md={4}>{list}</Row>
    </Container>
  );
};

export default ProductsList;
