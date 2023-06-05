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

const AdminProductCard = ({ id, image, name, categoryId }) => {
  const categoryName = categories.find(
    category => category.value === categoryId
  ).name;

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
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
};

export default AdminProductCard;
