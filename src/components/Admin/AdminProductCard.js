import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  IconButton,
  Box,
  Divider,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { categories } from '../Products/ProductsFilter';
import { useDispatch } from 'react-redux';
import { openDialogBox } from '../../store/Dialog/dialog-slice';
import { Link } from 'react-router-dom';

const AdminProductCard = ({ id, image, name, categoryId, pageNumber }) => {
  const categoryName = categories.find(
    category => category.value === categoryId
  ).name;

  const dispatch = useDispatch();

  const deleteProductHandler = () => {
    dispatch(
      openDialogBox({
        message: 'Are you sure you want to permanently delete this product?',
        title: 'Confirmation',
        confirmFunction: 'deleteProduct',
        confirmFunctionPayload: id,
      })
    );
  };

  return (
    <Card sx={{ display: 'flex', justifyContent: 'center' }}>
      <CardMedia
        sx={{ maxWidth: '150px', padding: '20px' }}
        component="img"
        image={image}
        alt="product"
      />
      <Divider sx={{ backgroundColor: 'black' }} orientation="vertical" />
      <Box>
        <CardContent>
          <Typography variant="h5">{name}</Typography>
          <Typography sx={{ color: 'orange' }} variant="h6">
            {categoryName}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <IconButton
            to={`/edit-product/${id}?pag=${pageNumber}`}
            component={Link}
          >
            <EditIcon />
          </IconButton>
          <IconButton onClick={deleteProductHandler}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
};

export default AdminProductCard;
