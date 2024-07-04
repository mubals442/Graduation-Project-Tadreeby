import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function StarReview() {
  const [rating, setRating] = useState(2.5);  // Initialize state with default value

  const handleChange = (event, newValue) => {
    setRating(newValue);  // Update state when the user selects a new rating
  };

  return (
    <Stack spacing={1} direction="row" sx={{ direction: 'ltr', display:'inline-block'} }>
      <Rating
        name="half-rating"
        value={rating}  // value of rating
        precision={0.5}
        onChange={handleChange}  // Set up the handler to change the rating
        size='large'
      />
      <h1>Rating: {rating}</h1>
    </Stack>
  );
}