import styles from './Products.module.css';
import ProductsList from '../components/ProductsList';
import ShopPagination from '../components/ShopPagination';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
  // const [products, setProducts] = useState([]);
  // const productsChangeHandler = changedProducts => {
  //   setProducts(changedProducts);
  // };

  const data = useLoaderData();

  return (
    <div className={styles['products-list']}>
      <ProductsList products={data.products} />
      <ShopPagination />
    </div>
  );
};

export default Products;
