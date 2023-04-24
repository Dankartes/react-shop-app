// import styles from './Products.module.css';
import ProductsList from '../components/ProductsList';
import ShopPagination from '../components/ShopPagination';
import { useLoaderData } from 'react-router-dom';
import ProductsFilter from '../components/ProductsFilter';

import { Container, Col, Row } from 'react-bootstrap';

const Products = () => {
  const data = useLoaderData();

  // console.log(data);

  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <ProductsFilter />
        </Col>

        <Col md={9}>
          <ProductsList products={data.products} />
          <ShopPagination />
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
