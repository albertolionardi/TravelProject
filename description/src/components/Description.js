import React, { useEffect, useState } from 'react';
import { useParams , useNavigate } from 'react-router-dom';

const Description = () => {
  const { activityName } = useParams();
  const [Descriptions, setDescriptions] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleBooking = (activityName, price) => {
      navigate(`/payment/${activityName}`, { state: { price } });
      
  };

  useEffect(() => {
      fetch(`/api/activities/${activityName}/`)
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => {
              setDescriptions(data);
          })
          .catch(error => setError(error.message));
  }, [activityName]);

  if (error) {
      return <div>Error: {error}</div>;
  }

  if (!Descriptions) {
      return <div>Loading...</div>;
  }

  return (
      <div>
          <h1>{Descriptions.title}</h1>
          <img src={Descriptions.image} alt={Descriptions.title} />
          <p>{Descriptions.description}</p>
          <p>Price: {Descriptions.price ? Descriptions.price : 'Price not available'}</p> 
          <button onClick={() => handleBooking(Descriptions.title, Descriptions.price)}>Book Now</button>
      </div>
  );
};

  
  export default Description;