import styles from './BottomNavigation.module.css';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';
import { FaReact, FaShoppingCart, FaShoppingBasket } from 'react-icons/fa';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import { SiReactrouter, SiRedux, SiFirebase } from 'react-icons/si';
const BottomNavigation = () => {
  return (
    <div className={styles.footer}>
      <div className={styles['top-sections']}>
        <section className={styles['store-section']}>
          <h5 className={styles.title}>Store</h5>
          <div className={styles.details}>
            <Link to="/products/1">
              <FaShoppingBasket /> Products
            </Link>
            <Link to="/cart">
              <FaShoppingCart /> Cart
            </Link>
          </div>
        </section>

        <section className={styles['tech-section']}>
          <h5 className={styles.title}>Technologies</h5>
          <div className={styles.details}>
            <Link target="_blank" to="https://react.dev/">
              <FaReact /> React
            </Link>
            <Link target="_blank" to="https://redux.js.org/">
              <SiRedux /> Redux
            </Link>
            <Link target="_blank" to="https://reactrouter.com/en/main">
              <SiReactrouter /> React Router
            </Link>
            <Link target="_blank" to="https://firebase.google.com/">
              <SiFirebase /> Firebase
            </Link>
          </div>
        </section>

        <section className={styles['resources-section']}>
          <h5 className={styles.title}>Other resources</h5>
          <div className={styles.details}>
            <Link target="_blank" to="https://swiperjs.com/">
              Swiper
            </Link>
            <Link target="_blank" to="https://mui.com/">
              MUI
            </Link>
            <Link target="_blank" to="https://notistack.com/">
              Notistack
            </Link>
            <Link
              target="_blank"
              to="https://react-icons.github.io/react-icons/"
            >
              React Icons
            </Link>
            <Link target="_blank" to="https://pixabay.com/">
              Pixabay
            </Link>
          </div>
        </section>
      </div>
      <Divider sx={{ backgroundColor: 'white' }} />
      <div className={styles['bottom-sections']}>
        <section className={styles['bottom-info']}>
          2023 React Shop Project
        </section>
      </div>
    </div>
  );
};

export default BottomNavigation;
