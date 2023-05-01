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

const ProductsFilter = () => {
  const [[minPrice, maxPrice], setPriceInterval] = useState([1, 1000]);
  const [productName, setProductName] = useState('');

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
    console.log(productName);
  };

  return (
    <Card>
      <CardContent>
        <Slider
          min={1}
          max={1000}
          disableSwap
          value={[minPrice, maxPrice]}
          onChange={priceChangeHandler}
          valueLabelDisplay="auto"
        />

        <TextField
          inputProps={inputProps}
          onChange={minPriceHandler}
          value={minPrice}
          variant="outlined"
          label="min"
        />

        <TextField
          inputProps={inputProps}
          onChange={maxPriceHandler}
          value={maxPrice}
          variant="outlined"
          label="max"
        />

        <TextField
          variant="outlined"
          label="Product Name"
          value={productName}
          onChange={productNameHandler}
        />
      </CardContent>
      <CardActions>
        <Button size="small" startIcon={<ClearIcon />} color="error">
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
