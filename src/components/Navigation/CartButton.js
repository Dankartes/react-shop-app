import { Badge, IconButton } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const CartButton = ({ quantity }) => {
  return (
    <IconButton
      component={Link}
      to="/cart"
      aria-label="cart"
      sx={{
        color: 'white',
        '&:hover': {
          color: 'white',
        },
      }}
    >
      <Badge
        sx={{
          '& .MuiBadge-badge': {
            backgroundColor: 'red',
          },
        }}
        badgeContent={quantity}
      >
        <ShoppingCart />
      </Badge>
    </IconButton>
  );
};

export default CartButton;
