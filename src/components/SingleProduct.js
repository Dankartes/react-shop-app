import styles from './SingleProduct.module.scss';
import Card from '../UI/Card';

const SingleProduct = ({ name, price, description }) => {
  return (
    <Card>
      <div className={styles.photo}>
        <img
          src="https://media.alephnews.ro/2020/11/papuci-lidl.jpeg"
          alt="product"
        />
      </div>

      <div className={styles['product-details']}>
        <h4>
          <a href="">{name}</a>
        </h4>

        <div className={styles['product-price']}>{price}$</div>
      </div>
    </Card>
  );
};

export default SingleProduct;
