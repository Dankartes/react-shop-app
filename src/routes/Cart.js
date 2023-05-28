import { Card, CardHeader, Divider, CardContent, Grid } from '@mui/material';
import CartList from '../components/Cart/CartList';
import { useSelector } from 'react-redux';
import SingleProduct from '../components/Products/SingleProduct';

// import './Cart.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';

const Cart = () => {
  const products = useSelector(state => state.productsReducer.products);

  return (
    <>
      <Grid sx={{ maxWidth: '800px' }} container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Shopping Cart" />
            <Divider sx={{ backgroundColor: 'black' }} />
            <CartList />
          </Card>
        </Grid>

        <Grid item xs={12}>
          <h4>Other products</h4>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination, Navigation, Autoplay]}
          >
            {products.map(product => (
              <SwiperSlide>
                <SingleProduct
                  key={product.id}
                  id={product.id}
                  categoryId={product.categoryId}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  favorited={product.favorited}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </>
  );
};

export default Cart;
