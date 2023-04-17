import styles from './Products.module.css';
import ProductsList from '../components/ProductsList';
import ShopPagination from '../components/ShopPagination';
import { useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const productsChangeHandler = changedProducts => {
    console.log('test:', ...changedProducts.data);
    setProducts([...changedProducts.data]);
  };

  return (
    <div className={styles['products-list']}>
      <ProductsList products={products} />
      <ShopPagination onProductsChange={productsChangeHandler} />
    </div>
  );
};

export default Products;
