import {
  Slider,
  TextField,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from 'react-router-dom';

const ProductsFilter = () => {
  const [[minPrice, maxPrice], setPriceInterval] = useState([1, 1000]);
  const [productName, setProductName] = useState('');
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
    navigation('/products/1');
    setPriceInterval([1, 1000]);
    setProductName('');
  };

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
          to={`?name=${productName}&min-price=${minPrice}&max-price=${maxPrice}`}
          variant="outlined"
        >
          Filter
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductsFilter;
