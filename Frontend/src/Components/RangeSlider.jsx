import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { sortbyprice } from '../../Features/FilterSlice';

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider() {
  const dispatch = useDispatch();
  const doc = useSelector((state) => state.filter.filter);

  let max;
  if (doc.length > 0) {
    max = Math.max.apply(
      null,
      doc.map(function (item) {
        return item.price;
      })
    );
    console.log(max);
  }

  const [price, setPrice] = React.useState(30);

  const handleprice = (e, newValue) => {
    setPrice(newValue);
    console.log(newValue);
    dispatch(sortbyprice(newValue)); // Use newValue, not price
  };

  return (
    <Box className="w-54 ml-2">
      <Slider
        aria-label="Temperature"
        value={price}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={30}
        max={max || 1000}
        onChange={handleprice}
      />
    </Box>
  );
}
