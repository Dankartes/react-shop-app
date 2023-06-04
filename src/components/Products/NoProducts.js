import { SentimentDissatisfied } from '@mui/icons-material';
import { Card } from '@mui/material';

const NoProducts = () => {
  return (
    <Card sx={{ marginTop: '16px' }}>
      <p style={{ fontSize: '30px', textAlign: 'center' }}>
        <SentimentDissatisfied style={{ fontSize: '30px' }} /> No products
        found!
      </p>
    </Card>
  );
};

export default NoProducts;
