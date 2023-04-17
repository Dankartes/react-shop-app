import SingleProduct from './SingleProduct';
import styles from './ProductsList.module.css'

const ProductsList = ({ products }) => {
  const list = products.map(product => (
    <SingleProduct
      key={product.id}
      name={product.name}
      price={product.price}
      description={product.description}
    />
  ));

  return <div className={styles['products-list']}>{list}</div>;
};

export default ProductsList;
