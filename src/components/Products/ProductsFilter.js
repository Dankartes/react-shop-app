import {
  Slider,
  TextField,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from 'react-router-dom';

export const categories = [
  { name: 'Home Goods', value: 1 },
  { name: 'Clothing & Footwear', value: 2 },
  { name: 'Food & Beverages', value: 3 },
  { name: 'Entertainment', value: 4 },
];

const ProductsFilter = () => {
  const [[minPrice, maxPrice], setPriceInterval] = useState([1, 1000]);
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [isFavorited, setisFavorited] = useState(false);

  const navigation = useNavigate();

  const priceChangeHandler = (event, newInterval) => {
    setPriceInterval(newInterval);
  };

  const maxPriceHandler = event => {
    setPriceInterval(prevState => [prevState[0], event.target.value]);
  };

  const minPriceHandler = event => {
    setPriceInterval(prevState => [event.target.value, prevState[1]]);
  };

  // const inputPriceBlurHandler = () => {
  //  //later
  // };

  const inputProps = {
    min: 1,
    max: 1000,
    type: 'number',
    // onBlur: inputPriceBlurHandler,
    'aria-labelledby': 'input-slider',
  };

  const productNameHandler = event => {
    setProductName(event.target.value);
  };

  const clearFilterHandler = () => {
    setProductName('');
    setCategory('');
    setPriceInterval([1, 1000]);
    setisFavorited(false);
    navigation('/products/1');
  };

  const categoryChangeHandler = event => {
    setCategory(event.target.value);
  };

  const toggleFavoriteHandler = () => {
    setisFavorited(!isFavorited);
  };

  const filterLink = `?name=${productName}&min-price=${minPrice}&max-price=${maxPrice}&category=${category}&favorited=${isFavorited}`;

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Product Name"
              value={productName}
              onChange={productNameHandler}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="select-category-label">Category</InputLabel>
              <Select
                id="select-category"
                labelId="select-category-label"
                label="category"
                value={category}
                onChange={categoryChangeHandler}
              >
                {categories.map(category => {
                  return (
                    <MenuItem key={category.value} value={category.value}>
                      {category.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={12}>
            <Slider
              min={1}
              max={1000}
              disableSwap
              value={[minPrice, maxPrice]}
              onChange={priceChangeHandler}
              valueLabelDisplay="auto"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              inputProps={inputProps}
              onChange={minPriceHandler}
              value={minPrice}
              variant="outlined"
              label="min"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              inputProps={inputProps}
              onChange={maxPriceHandler}
              value={maxPrice}
              variant="outlined"
              label="max"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  onClick={toggleFavoriteHandler}
                  checked={isFavorited}
                  // sx={{

                  //   '&.Mui-checked': {
                  //     color: 'red',
                  //   },
                  // }}
                />
              }
              label="Added to favorites"
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          size="small"
          startIcon={<ClearIcon />}
          color="error"
          onClick={clearFilterHandler}
        >
          Clear
        </Button>
        <Button
          size="small"
          startIcon={<SearchIcon />}
          component={Link}
          to={filterLink}
          variant="outlined"
        >
          Filter
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductsFilter;
