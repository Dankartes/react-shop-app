import { SentimentDissatisfied } from '@mui/icons-material';

const NoProducts = () => {
  return (
    <>
      <p style={{ fontSize: '30px', textAlign: 'center' }}>
        <SentimentDissatisfied style={{ fontSize: '30px' }} /> No products
        found!
      </p>
    </>
  );
};

export default NoProducts;
