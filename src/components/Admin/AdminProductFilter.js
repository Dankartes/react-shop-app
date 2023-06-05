import {
  Card,
  CardContent,
  TextField,
  MenuItem,
  Grid,
  IconButton,
  CardActions,
} from '@mui/material';
import { categories } from '../Products/ProductsFilter';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminProductFilter = () => {
  const [name, setName] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const navigation = useNavigate();

  const changeNameHandler = event => {
    setName(event.target.value);
  };

  const changeCategoryIdHandler = event => {
    setCategoryId(event.target.value);
  };

  const clearFilterHandler = () => {
    setName('');
    setCategoryId('');
    navigation('/admin-panel/1');
  };

  const filterLink = `?name=${name}&categoryId=${categoryId}`;

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <TextField
              value={name}
              onChange={changeNameHandler}
              type="text"
              id="name"
              name="name"
              label="Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <TextField
              value={categoryId}
              onChange={changeCategoryIdHandler}
              type="text"
              select
              id="category"
              name="category"
              label="Category"
              fullWidth
            >
              {categories.map(category => (
                <MenuItem key={category.value} value={category.value}>
                  {category.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={2}>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
              <IconButton
                onClick={clearFilterHandler}
                color="error"
                sx={{
                  '&:hover': {
                    color: 'error.main',
                  },
                }}
              >
                <ClearIcon />
              </IconButton>
              <IconButton component={Link} to={filterLink} color="primary">
                <SearchIcon />
              </IconButton>
            </CardActions>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default AdminProductFilter;
