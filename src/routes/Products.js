import styles from './Products.module.css';
import ProductsList from '../components/ProductsList';

const Products = () => {
  return<div className={styles['products-list']}> <ProductsList  /></div>;
};

export default Products;
