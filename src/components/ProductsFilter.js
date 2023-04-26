import { Card, Button } from 'react-bootstrap';
import { Slider, TextField } from '@mui/material';
import { useState } from 'react';

const ProductsFilter = () => {
  const [priceInterval, setPriceInterval] = useState([20, 50]);

  const priceChangeHandler = (event, newInterval) => {
    setPriceInterval(newInterval);
    console.log(newInterval);
  };

  const maxPriceHandler = event => {
    setPriceInterval(prevState => [prevState[0], event.target.value]);
  };

  const minPriceHandler = event => {
    setPriceInterval(prevState => [event.target.value, prevState[1]]);
  };

  const handlePriceIntervalBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  const inputProps = {
    min: 1,
    max: 1000,
    type: 'number',
    'aria-labelledby': 'input-slider',
  };

  return (
    <Card>
      <Card.Body>
        <Slider
          min={1}
          max={1000}
          disableSwap
          value={priceInterval}
          onChange={priceChangeHandler}
          valueLabelDisplay="auto"
        />

        <TextField
          inputProps={inputProps}
          onChange={minPriceHandler}
          value={priceInterval[0]}
          variant="outlined"
          label="min"
        />
        <TextField
          inputProps={inputProps}
          onChange={maxPriceHandler}
          value={priceInterval[1]}
          variant="outlined"
          label="max"
        />
      </Card.Body>
    </Card>
  );
};

export default ProductsFilter;
