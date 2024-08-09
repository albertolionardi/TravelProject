import React, { useState } from 'react';
import NavigationBar from '../../../home/src/components/NavigationBar';
import Header from '../../../home/src/components/Header';


const RateUs = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

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
    <>
    <div>
      <h1>Rate Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Rating:
            <select value={rating} onChange={handleRatingChange}>
              <option value="0">Select a rating</option>
              <option value="1">1 - Very Poor</option>
              <option value="2">2 - Poor</option>
              <option value="3">3 - Average</option>
              <option value="4">4 - Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Feedback:
            <textarea value={feedback} onChange={handleFeedbackChange} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default RateUs;