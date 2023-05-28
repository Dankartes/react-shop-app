import styles from './CartItem.module.css';
import { Divider, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../store/Cart/cart-slice';

import {
  addToCartThunk,
  removeFromCartThunk,
} from '../../store/Cart/cart-actions';

const CartItem = ({
  productId,
  image,
  name,
  categoryName,
  price,
  quantity,
}) => {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(addToCartThunk(productId));
  };

  const removeItemHandler = () => {
    dispatch(removeFromCartThunk(productId));
  };

  const deleteItemHandler = () => {
    dispatch(removeFromCartThunk(productId, true));
  };

  return (
    <>
      <div className={styles.item}>
        <div className={styles['action-buttons']}>
          <IconButton onClick={deleteItemHandler} aria-label="delete item">
            <DeleteIcon />
          </IconButton>
        </div>

        <div className={styles.image}>
          <img src={image} alt="product" />
        </div>

        <div className={styles.description}>
          <span>{name}</span>
          <span>{categoryName}</span>
        </div>

        <div className={styles.quantity}>
          <IconButton onClick={removeItemHandler} aria-label="remove item">
            <RemoveIcon />
          </IconButton>
          <input type="text" name="name" value={quantity} />
          <IconButton onClick={addItemHandler} aria-label="add item">
            <AddIcon />
          </IconButton>
        </div>

        <div className={styles['total-price']}>${price * quantity}</div>
      </div>
      <Divider sx={{ backgroundColor: 'black' }} />
    </>
  );
};

export default CartItem;
