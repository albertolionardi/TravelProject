import React, { useState } from 'react';
import { Button, TextField, Typography, Box, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Star, StarBorder } from '@mui/icons-material';
import '../../static/css/rateus.css';


const RateUs = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const StyledButton = styled(Button)({
    marginTop: '20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    '&:hover': {
      backgroundColor: '#45a049',
    },
  });
  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you would typically send the rating and feedback to your server
    console.log('Rating submitted:', rating);
    console.log('Feedback submitted:', feedback);
    setSubmitted(true);
  };

  if (submitted) {
    return <div>Thank you for your feedback!</div>;
  }

  return (
    <Box className="rate-us-container">
      <Typography className="rate-us-title">
        Rate Us
      </Typography>
      <form className="rate-us-form" onSubmit={handleSubmit}>
        <Box className="rate-us-rating">
          <Rating
            name="rating"
            value={rating}
            onChange={handleRatingChange}
            icon={<Star fontSize="inherit" />}
            emptyIcon={<StarBorder fontSize="inherit" />}
          />
        </Box>
        <TextField
          className="rate-us-feedback"
          label="Your Feedback"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={feedback}
          onChange={handleFeedbackChange}
        />
        <Button
          className="rate-us-submit-button"
          type="submit"
          variant="contained"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default RateUs;