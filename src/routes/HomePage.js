import styles from './HomePage.module.css';
import { Grid } from '@mui/material';
import applicationImage from '../media/application.jpg';
import featuresImage from '../media/features.jpg';
import HomeCard from '../components/Home/HomeCard';

const cardsData = [
  {
    title: 'Welcome!',
    details: (
      <p>
        Welcome to my first React application. This is a shop that I built
        specifically to practice different React concepts, such as JSX,
        components, and hooks. In addition to React, I'm using React Router for
        implementing client-side routing, as well as Firebase and Redux for
        managing and storing data. Throughout the application, you will also
        find many components from the MUI library, which have been instrumental
        in organizing and styling this application. Of course, there are many
        more libraries and resources that have been utilized. If you want to
        learn more about them, you can check the links in the footer!
      </p>
    ),
    image: applicationImage,
  },
  {
    title: 'Features',
    details: (
      <p>
        What can you expect to see here? Well, besides this home page there is
        also a "Products" tab where you can check the catalogue. Here you can
        filter different products, favorite them or add them to cart! You can
        also click on them to see more details. Performing all of those actions
        will trigger different UI changes such as receiving a message, an error,
        or a color change. In the cart tab you can check your products
        (alongside some more interesting things) and go to checkout.
      </p>
    ),
    image: featuresImage,
  },
];

function HomePage() {
  return (
    <Grid sx={{ maxWidth: 'lg' }} container>
      {cardsData.map((card, index) => (
        <HomeCard
          key={card.title}
          title={card.title}
          details={card.details}
          image={card.image}
          reversed={index % 2 !== 0 ? true : false}
        />
      ))}
    </Grid>
  );
}

export default HomePage;
